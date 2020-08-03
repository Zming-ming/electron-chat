<template>
    <div class="group">
        <!-- <Input suffix="ios-search" placeholder="Enter text" @on-focus="search()" style="width: 252px;margin-top:-44px;z-index:111;" /> -->
        <div class="left">
            <Scroll height="570">
                 <div class="list active">
                    <Avatar shape="square" size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    <div class="content">
                        <span class="name">测试</span>
                        <span class="time">09:00</span>
                    </div>
                </div>
                <div class="list" v-for="n in 10" :key="n">
                    <Avatar shape="square" size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    <div class="content">
                        <span class="name">测试</span>
                        <span class="time">09:00</span>
                    </div>
                </div>
            </Scroll>
            <Icon class="add" type="md-add-circle" size="40" @click="value3 = true"/>
        </div>
        <div class="right">
            <div class="top">
                <span class="name">xaxaxaxaxaxax</span>
                <span class="about">axaxaxaxaxaxaxaxaxax</span>
                <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" style="width:60px;height:60px;"/>
            </div>
          
            <div class="content">
                <List>
                    <ListItem>创建时间：2020-04-25</ListItem>
                    <ListItem>创建人：测试测试</ListItem>
                    <ListItem>群人数：129 <span style="margin-left:30px;color:#2d8cf0;font-weight:900;" @click="value1 = true">查看成员</span></ListItem>
                </List>
            </div>
           
            <Button type="primary" style="margin-top:30px;">发消息</Button>
        </div>
        <Drawer title="群成员" width="460" :closable="false" v-model="value1">
            <div style="width:60px;height:70px;float:left;margin-left:8px;margin-top:15px;" v-for="n in 50" :key="n">
                <img src="https://i.loli.net/2017/08/21/599a521472424.jpg" style="width:40px;height:40px;margin-left:10px;"/>
                <div style="width:60px;height:30px;line-height:15px;text-align: center;">ccscscscsc</div>
            </div>
        </Drawer>
        <Drawer
            title="创建群聊"
            v-model="value3"
            width="460"
            :mask-closable="false"
            :styles="styles"
        >
            <Form :model="formData">
                <FormItem label="群名称" label-position="top">
                    <Input v-model="formData.name" maxlength="15" show-word-limit placeholder="please enter group name" />
                </FormItem>
                <FormItem label="群简介" label-position="top">
                    <Input type="textarea" v-model="formData.desc" maxlength="150" show-word-limit :rows="4" :autosize="{maxRows:4,minRows: 4}" placeholder="please enter the description" />
                </FormItem>
                <FormItem label="群头像" label-position="top">
                    
                </FormItem>
                <div class="demo-upload-list" v-if="upload != ''">
                    <template>
                        <img :src="upload" style="width:130px;height:130px;">
                        <div class="demo-upload-list-cover">
                            <Icon type="ios-trash-outline" @click.native="handleRemove()"></Icon>
                        </div>
                    </template>
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
                    style="display: inline-block;width:126px;margin-top: -20px;"
                    v-if="upload == ''">
                    <div style="width: 126px;height:126px;line-height: 126px;">
                        <Icon type="ios-camera" size="30"></Icon>
                    </div>
                </Upload>
            </Form>
            <div class="demo-drawer-footer" style="margin-top:40px;">
                <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
                <Button type="primary" @click="value3 = false">Submit</Button>
            </div>
        </Drawer>  
        <Drawer title="添加群" width="460" :closable="false" v-model="value2">
            <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
            <List>
                <ListItem v-for="n in 20" :key="n">
                    <ListItemMeta avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" title="This is title" description="This is description, this is description." />
                    <template slot="action">
                        <li>加入</li>
                    </template>
                </ListItem>
            </List>
        </Drawer>  
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1:false,
            value3:false,
            value2:false,
            styles: {
                height: 'calc(100% - 55px)',
                overflow: 'auto',
                paddingBottom: '40px',
                position: 'static'
            },
            formData:{
                name:'',
                desc:''
            },
            upload: ''
        };
    },
    methods: {
        handleRemove () {
            this.upload = '';
            console.log(this.upload)
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
            const check = this.upload == '';
            if (!check) {
                this.$Notice.warning({
                    title: 'Up to five pictures can be uploaded.'
                });
            }
            return check;
        },
        search () {
            this.value2 = true;
        }
    }
  
}
</script>

<style lang="less" scoped>
    .group{
        width: 100%;
        height: 100%;
        position: relative;
        .left{
            width: 40%;
            height: 100%;
            background-color: #e2e2e2;
            position: absolute;
            top: 0;
            left: 0;
            .list{
                width: 100%;
                height: 70px;
                padding: 15px 10px;
                .content{
                    width: 180px;
                    height: 40px;
                    float: right;
                    .name{
                        width: 130px;
                        height: 40px;
                        font-size: 16px;
                        float: left;
                        line-height: 40px;
                        color: #333;
                        font-weight: 900;
                    }
                    .time{
                        width: 40px;
                        height: 40px;
                        float: right;
                        line-height: 40px;
                        color: #aaa;
                    }
                }
            }
            .list:hover{
                background-color: #d9d9d9;
            }
            .active{
                background-color: #b9b9b9 !important;
            }
            .add{
                position: absolute;
                right: 20px;
                bottom: 50px;
            }
        }
        .right{
            width: 60%;
            height: 100%;
            background-color: #e6e6e6;
            position: absolute;
            top: 0;
            right: 0;
            padding: 30px 6%;
            text-align: center;
            .top{
                width: 100%;
                height: 170px;
                border-bottom: #d9d9d9 solid 1px;
                .name{
                    width: 60%;
                    height: 30px;
                    line-height: 20px;
                    font-size: 24px;
                    font-weight: 900;
                    position:absolute;
                    top: 70px;
                    left: 0;
                }
                .about{
                    width: 60%;
                    height: 50px;
                    font-size: 16px;
                    position:absolute;
                    top: 100px;
                    left: 0;
                }
                img{
                    position:absolute;
                    right: 12%;
                    top: 70px;
                }
            }
            .content{
                width: 100%;
                height: 200px;
                border-bottom: #d9d9d9 solid 1px;
                padding: 30px 0 0 30px;
            }
        }
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
        margin-top: -20px;
        
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
    /deep/.ivu-scroll-loader{
        height: 0;
    }
</style>