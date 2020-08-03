<template>
    <div class="index">
        <div class="left">
            <div class="top">
                <Avatar shape="square" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"/>
                <span class="name">qqqqqq</span>
                <span class="talk">qddqdqdqddakmmmmmmmmmmmmmmmmmmm</span>
            </div>
            <div class="content">
                <div class="tab">
                    <Icon type="md-chatboxes" size="20" :style="{'color': (tabIndex==0 ? '#2d8cf0':''),'border-bottom': (tabIndex==0 ? 'solid 3px #2d8cf0':'')}" @click="tabChange(0)"/>
                    <Icon type="md-people" size="20" style="margin-left:70px" :style="{'color': (tabIndex==1 ? '#2d8cf0':''),'border-bottom': (tabIndex==1 ? 'solid 3px #2d8cf0':'')}" @click="tabChange(1)"/>
                </div>
                <div class="msg_list" v-if="tabIndex == 0">
                    <Scroll height="360">
                        <div class="list" v-for="n in 10" :key="n">
                            <div class="avatar" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></div>
                            <div class="content">
                                <div class="nick_name">莫甘娜</div>
                                <div class="message">凯尔，你被自己的光芒变的盲目！</div>
                            </div>
                            <div class="time">
                                <div class="times">22:02</div>
                                <div class="num" v-if="n<99&&n>0">{{n}}</div>
                                <div class="num" v-if="n>99">99+</div>
                            </div>
                        </div>
                    </Scroll>
                </div>
                <div class="friend_list" v-if="tabIndex == 1">
                    <Scroll height="360">
                        
                    </Scroll>
                </div>
            </div>
            <div class="bottom">
                <Icon type="md-search" size="20"/>
                <Icon type="md-add" size="20" style="margin-left:20px;"/>
                <Icon type="md-aperture" size="20" style="margin-left:20px;"/>
                <Icon type="md-shirt" size="20" style="margin-left:20px;"/>
                <Icon type="md-information-circle" size="20" style="margin-left:20px;"/>
            </div>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
import index from './index.js';
export default {
	...index
};
</script>

<style scoped src="./index.less"></style>