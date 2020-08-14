<template>
    <div class="friendInfo">
        <div class="info">
            <div class="avatar" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></div>
            <div class="content">
                <div class="nick_name">莫甘娜</div>
                <div class="message">凯尔，你被自己的光芒变的盲目！</div>
            </div>
        </div>
        <div class="item">
            好友圈 <Icon type="ios-arrow-forward" size="20" style="float:right;margin-top:10px;" color="#8799a3"/>
        </div>
        <div class="item">
            地区 
        </div>
        <div class="item">
            备注 <Icon type="ios-arrow-forward" size="20" style="float:right;margin-top:10px;" color="#8799a3"/>
        </div>
        <Button type="error" style="margin-top:80px;width:100px;margin-left:100px;">删除好友</Button>
        <Button type="error" style="margin-top:20px;width:100px;margin-left:100px;" @click="add">添加好友</Button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        };
    },
    methods: {
        add(){
            this.$Modal.confirm({
                render: (h) => {
                    return h('Input', {
                        props: {
                            value: this.value,
                            autofocus: true,
                            placeholder: 'Please enter your name...'
                        },
                        on: {
                            input: (val) => {
                                this.value = val;
                            }
                        }
                    })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .friendInfo{
        width: 460px;
        height: 420px;
        padding: 30px 70px;
        .info{
            width: 320px;
            height: 70px;
            position: relative;
            border-bottom: solid 1px #c5c8ce;
            .avatar{
                width: 42px;
                height: 42px;
                background-size: cover;
                background-position: center;
                border-radius: 4px;
                position: absolute;
                left: 0;
                top: 0;
            }
            .content{
                width: 260px;
                height: 42px;
                position: absolute;
                top: 0;
                left: 50px;
                .nick_name{
                    font-size: 15px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .message{
                    font-size: 12px;
                    color: #8799a3;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
            }
        }
        .item{
            width: 320px;
            height: 40px;
            border-bottom: solid 1px #c5c8ce;
            font-size: 14px;
            line-height: 40px;
        }
    }
</style>