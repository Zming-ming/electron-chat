<template>
    <div class="message">
        <div class="left">
            <Scroll height="570">
                 <div class="list active">
                    <Avatar shape="square" size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    <div class="content">
                        <div class="top">
                            <span class="name">测试</span>
                            <span class="time">09:00</span>
                        </div>
                        <div class="bottom">1231444254252121？</div>
                    </div>
                </div>
                <div class="list" v-for="n in 10" :key="n">
                    <Avatar shape="square" size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    <div class="content">
                        <div class="top">
                            <span class="name">测试</span>
                            <span class="time">09:00</span>
                        </div>
                        <div class="bottom">1231444254252121？{{n}}</div>
                    </div>
                </div>
            </Scroll>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
       
   },
  
}
</script>

<style lang="less" scoped>
    .message{
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
                    .top{
                        height: 20px;
                        .name{
                            width: 130px;
                            height: 20px;
                            font-size: 16px;
                            float: left;
                            line-height: 20px;
                            color: #333;
                            font-weight: 900;
                        }
                        .time{
                            width: 40px;
                            height: 20px;
                            float: right;
                            color: #aaa;
                        }
                    }
                    .bottom{
                        height: 20px;
                        line-height: 24px;
                        color: #999;
                    }
                }
            }
            .list:hover{
                background-color: #d9d9d9;
            }
            .active{
                background-color: #b9b9b9 !important;
            }
        }
        .right{
            width: 60%;
            height: 100%;
            background-color: #e6e6e6;
            position: absolute;
            top: 0;
            right: 0;
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
        /deep/.ivu-scroll-loader{
            height: 0;
        }
    }
</style>