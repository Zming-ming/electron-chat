<template>
    <div class="moment">
        <Scroll height="400">
            <List item-layout="vertical">
                <ListItem v-for="item in data" :key="item.title">
                    <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
                    <template slot="action">
                        <div v-if="item.imgs.length > 1" style="width: 360px;margin-left:50px;">
                            <img  v-for="(item1,index) in item.imgs" :key="index" :src="item1" style="width: 120px;height: 120px;">
                        </div>
                        <div v-if="item.imgs.length == 1" style="width: 360px;margin-left:50px;">
                            <img :src="item.imgs[0]" style="width: 360px;">
                        </div>    
                        <li style="margin-left:50px;margin-top:20px;">
                            <Icon type="ios-thumbs-up-outline" /> 234
                        </li>
                        <li @click="value4 = true">
                            <Icon type="ios-chatbubbles-outline" /> 345
                        </li>
                        <li style="margin-left:160px;"> 09:00 </li>
                    </template>
                </ListItem>
            </List>  
        </Scroll>
        <Drawer title="评论" :closable="true" width="360" v-model="value4">
            <p v-for="n in 50" :key="n">Some contents...</p>
        </Drawer>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value4: false,
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
            }
        },
        methods: {
            
        },
    }
</script>

<style lang="less" scoped>
    .moment{
        width: 400px;
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