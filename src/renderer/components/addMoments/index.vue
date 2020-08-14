<template>
    <div class="addMoments">
        <Form :model="formData">
            <FormItem label="动态内容" label-position="top">
                <Input type="textarea" v-model="formData.desc" :autosize="{minRows: 4,maxRows: 4}" :rows="4" maxlength="150" show-word-limit placeholder="please enter the moments" />
            </FormItem>
        </Form>

    
        <div class="demo-upload-list" v-for="(item2,index2) in uploadList" :key="index2">
            <template>
                <img :src="item2.url" style="width:116px;height:116px;">
                <div class="demo-upload-list-cover">
                    <Icon type="ios-trash-outline" @click.native="handleRemove(index2)"></Icon>
                </div>
            </template>
        </div>
        <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            style="display: inline-block;width:112px;"
            v-if="uploadList.length < 9">
            <div style="width: 112px;height: 112px;line-height: 112px;">
                <Icon type="ios-camera" size="30"></Icon>
            </div>
        </Upload>
        

        <div class="demo-drawer-footer" style="margin-top:20px;">
            <Button style="margin-right: 8px">Cancel</Button>
            <Button type="primary">Submit</Button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            formData:{
                desc:''
            },
            uploadList: [],
            defaultList: [
                {
                    'name': 'a42bdcc1178e62b4694c830f028db5c0',
                    'url': 'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large'
                },
                {
                    'name': 'bc7521e033abdd1e92222d733590f104',
                    'url': 'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large'
                },
                {
                    'name': 'bc7521e033abdd1e92222d733590f104',
                    'url': 'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large'
                },
                {
                    'name': 'bc7521e033abdd1e92222d733590f104',
                    'url': 'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large'
                },
                {
                    'name': 'bc7521e033abdd1e92222d733590f104',
                    'url': 'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large'
                }
            ],
        };
    },
    mounted () {
        this.uploadList = this.$refs.upload.fileList;
        console.log(this.uploadList);
    },
    methods: {
        handleRemove (key) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(key, 1);
        },
        handleSuccess (res, file) {
            file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            file.name = 'bc7521e033abdd1e92222d733590f104';
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
            const check = this.uploadList.length < 9;
            if (!check) {
                this.$Notice.warning({
                    title: 'Up to five pictures can be uploaded.'
                });
            }
            return check;
        }
    }
}
</script>

<style lang="less" scoped>
    .addMoments{
        width: 460px;
        height: 420px;
        padding: 30px 50px;
        overflow: auto;
    }
    .demo-upload-list{
        display: inline-block;
        width: 116px;
        height: 116px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
        
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
        line-height: 116px;
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
</style>