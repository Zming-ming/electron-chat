<template>
    <div class="moment">
        <Scroll height="550">
            <List item-layout="vertical">
                <ListItem v-for="item in data" :key="item.title">
                    <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
                    <template slot="action">
                        <div v-if="item.imgs.length > 1" style="width: 480px;margin-left:50px;">
                            <img  v-for="(item1,index) in item.imgs" :key="index" :src="item1" style="width: 160px;">
                        </div>
                        <div v-if="item.imgs.length == 1" style="width: 480px;margin-left:50px;">
                            <img :src="item.imgs[0]" style="width: 480px;">
                        </div>    
                        <li style="margin-left:50px;margin-top:20px;">
                            <Icon type="ios-thumbs-up-outline" /> 234
                        </li>
                        <li @click="value4 = true">
                            <Icon type="ios-chatbubbles-outline" /> 345
                        </li>
                        <li style="margin-left:260px;"> 09:00 </li>
                    </template>
                </ListItem>
            </List>  
        </Scroll>
        <Icon class="add" type="md-add-circle" size="40" @click="value3 = true"/>
        <Drawer title="评论" :closable="true" width="360" v-model="value4">
            <p v-for="n in 50" :key="n">Some contents...</p>
        </Drawer>
        <Drawer
            title="发表动态"
            v-model="value3"
            width="460"
            :mask-closable="false"
            :styles="styles"
        >
            <Form :model="formData">
                <FormItem label="动态内容" label-position="top">
                    <Input type="textarea" v-model="formData.desc" :rows="4" placeholder="please enter the moments" />
                </FormItem>
            </Form>

        
            <div class="demo-upload-list" v-for="(item2,index2) in uploadList" :key="index2">
                <template>
                    <img :src="item2.url" style="width:130px;height:130px;">
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
                style="display: inline-block;width:126px;"
                v-if="uploadList.length < 9">
                <div style="width: 126px;height:126px;line-height: 126px;">
                    <Icon type="ios-camera" size="30"></Icon>
                </div>
            </Upload>
         

            <div class="demo-drawer-footer" style="margin-top:20px;">
                <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
                <Button type="primary" @click="value3 = false">Submit</Button>
            </div>
        </Drawer>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value4: false,
                value3: false,
                data: [
                    {
                        title: 'This is title 1',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        imgs:['https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large',
                        'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large',
                        'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large']
                    },
                    {
                        title: 'This is title 2',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        imgs:['https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large',
                        'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large']
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        imgs:['https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large']
                    },
                    {
                        title: 'This is title 4',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        imgs:['https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large']
                    },
                    {
                        title: 'This is title 5',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        imgs:['https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large']
                    },
                    {
                        title: 'This is title 6',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                        imgs:['https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large']
                    }
                ],
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData:{
                    desc:''
                },
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
                uploadList: []
            }
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
        },
        mounted () {
            this.uploadList = this.$refs.upload.fileList;
            console.log(this.uploadList);
        }
    }
</script>

<style lang="less" scoped>
    .moment{
        padding: 10px 0 10px 4%;
        /* 滚动条 */
        ::-webkit-scrollbar {
            width: 4px;
            background-color: #d8d8d8;
        }
        /* 滚动槽 */
        ::-webkit-scrollbar-track {
            border-radius:10px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #bfc1c4;
        }
        .add{
            position: absolute;
            right: 20px;
            bottom: 50px;
        }
        
            
        
    }
    .demo-upload-list{
        display: inline-block;
        width: 130px;
        height: 130px;
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
        line-height: 130px;
    }
</style>