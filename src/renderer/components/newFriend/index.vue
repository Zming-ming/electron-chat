<template>
    <div class="newFriend">
        <Input search placeholder="Enter something..." />
        <Scroll height="330">
            <div class="list" v-for="n in 10" :key="n">
                <div class="avatar" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></div>
                <div class="content">
                    <div class="nick_name">莫甘娜</div>
                    <div class="message">凯尔，你被自己的光芒变的盲目！</div>
                </div>
                <div class="time">
                    <Button type="primary" style="height:20px;margin-top:10px;text-align:center;">同意</Button>
                </div>
            </div>
        </Scroll>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
    .newFriend{
        width: 460px;
        height: 420px;
        padding: 30px 70px;
        .list{
            width: 320px;
            height: 50px;
            margin-top: 5px;
            position: relative;
            .avatar{
                width: 36px;
                height: 36px;
                background-size: cover;
                background-position: center;
                border-radius: 4px;
                position: absolute;
                left: 7px;
                top: 7px;
            }
            .content{
                width: 180px;
                height: 36px;
                position: absolute;
                top: 7px;
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
            .time{
                width: 70px;
                height: 36px;
                text-align: center;
                position: absolute;
                top: 7px;
                right: 0;
            }
        }
    }
</style>