<template>
    <div class="userEdit">
        <Form :model="formItem" :label-width="40">
            <FormItem label="头像">
                <div class="demo-upload-list" v-if="formItem.img!=''">
                    <img :src="formItem.img" style="width:76px;height:76px;">
                    <div class="demo-upload-list-cover">
                        <Icon type="ios-trash-outline" @click.native="handleRemove(index2)"></Icon>
                    </div>
                </div>
                <Upload
                    ref="upload"
                    :show-upload-list="false"
                    :on-success="handleSuccess"
                    :format="['jpg','jpeg','png']"
                    :max-size="2048"
                    :on-format-error="handleFormatError"
                    :on-exceeded-size="handleMaxSize"
                    :before-upload="handleBeforeUpload"
                    multiple
                    type="drag"
                    action="//jsonplaceholder.typicode.com/posts/"
                    style="display: inline-block;width:72px;"
                    v-if="formItem.img==''">
                    <div style="width: 72px;height: 72px;line-height: 72px;">
                        <Icon type="ios-camera" size="30"></Icon>
                    </div>
                </Upload>
            </FormItem>
            <FormItem label="昵称">
                <Input v-model="formItem.input" placeholder="Enter something..."/>
            </FormItem>
            <FormItem label="性别">
                <RadioGroup v-model="formItem.radio">
                    <Radio label="male">保密</Radio>
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="地区">
                <Cascader :data="data" v-model="value2"></Cascader>
            </FormItem>
            <FormItem label="生日">
                <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
            </FormItem>
            <FormItem label="签名">
                <Input v-model="formItem.textarea" type="textarea" maxlength="100" show-word-limit :autosize="{minRows: 2,maxRows: 2}" placeholder="Enter something..."/>
            </FormItem>
            <FormItem>
                <Button type="primary">Submit</Button>
                <Button style="margin-left: 8px" @click="back">Cancel</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    img:'',
                    input: '',
                    radio: 'male',
                    date: '',
                    textarea: ''
                },
                value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        },
        methods: {
            handleRemove (key) {
                this.formItem.img = '';
            },
            handleSuccess (res, file) {
                this.formItem.img = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload () {
                const check = this.formItem.img == '';
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                }
                return check;
            },
            back(){
                this.$parent.componentsChange(1)
            }
        }
    }
</script>
<style lang="less" scoped>
    .userEdit{
        width: 460px;
        height: 420px;
        padding: 20px 50px 0 50px;
    }
    /deep/.ivu-form-item{
        margin-bottom: 12px !important;
    }
    /deep/.ivu-input{
        border-color: #FFF !important;
        background-color: transparent !important;
    }
    /deep/.ivu-input:focus{
        border-color: #FFF !important;
        color: #FFF !important;
    }
    /deep/.ivu-input:hover{
        border-color: #FFF !important;
        color: #FFF !important;
    }
    /deep/.ivu-upload-drag{
        background-color: transparent !important;
    }
    /deep/.ivu-input-word-count{
        background-color: transparent !important;
    }
    /deep/.ivu-radio-inner{
        background-color: transparent !important;
    }
</style>