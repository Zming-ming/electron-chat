<template>
    <div class="addFriend">
        <Input search placeholder="Enter something..." />
        <div class="search">
            <div class="list" v-for="n in 16" :key="n" @click="lockFriend">
                <img class="avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                <div class="name">ccscscscsc</div>
            </div>
        </div>
        <template style="text-align: center;">
            <Page :total="100" size="small" show-total />
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        lockFriend(){
            this.$parent.componentsChange(7)
        }
    }
}
</script>

<style lang="less" scoped>
    .addFriend{
        width: 460px;
        height: 420px;
        padding: 30px 70px 10px 70px;
        .search{
            width: 320px;
            height: 325px;
            .list{
                width:70px;
                height:70px;
                float:left;
                margin-left:8px;
                margin-top:10px;
                .avatar{
                    width:40px;
                    height:40px;
                    margin-left:15px;
                }
                .name{
                    width:60px;
                    height:30px;
                    line-height:15px;
                    text-align: center;
                }
            }
        }
        
    }
    /deep/.ivu-page-item{
        background-color: transparent !important;
    }
    /deep/.ivu-page-next{
        background-color: transparent !important;
    }
    /deep/.ivu-page-prev{
        background-color: transparent !important;
    }
</style>