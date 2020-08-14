<template>
    <div class="index" :style="bgImg">
        <div class="left">
            <div class="top" @click="componentsChange(1)">
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
                        <div class="list" v-for="n in 10" :key="n" @click="componentsChange(2)">
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
                        <div class="new_friend" @click="componentsChange(3)">
                            <div class="bg">
                                <Icon type="md-person-add" size="24"/>
                            </div>
                            <div class="content">新的朋友</div>
                            <Badge status="error" style="position: absolute;right: 7px;top: 16px;"/>
                        </div>
                        <div class="list">
                            <template>
                                <div class="index_item">A</div>
                                <div class="item" v-for="n in 10" :key="n" @click="componentsChange(7)">
                                    <div class="avatar" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></div>
                                    <div class="content">
                                        <div class="nick_name">莫甘娜</div>
                                        <div class="message">凯尔，你被自己的光芒变的盲目！</div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </Scroll>
                </div>
            </div>
            <div class="bottom">
                <Icon type="md-search" size="20"/>
                <Icon type="md-add" size="20" style="margin-left:20px;" @click="componentsChange(4)"/>
                <Icon type="md-aperture" size="20" style="margin-left:20px;" @click="componentsChange(5)"/>
                <Icon type="md-shirt" size="20" style="margin-left:20px;" @click="bgImage = !bgImage"/>
                <Icon type="md-information-circle" size="20" style="margin-left:20px;"/>
            </div>
        </div>
        <div class="right">
            <div class="top">
                <div class="frame">
                    <Icon style="float:right;margin-right:15px;line-height:30px;" size="18" type="md-close" @click="closeWindow"/>
                </div>
                <div class="title">
                    <div class="content">显示出删除删除删除</div>
                    <Icon type="md-create" v-show="pageType == 1" style="float:right;margin-right:15px;line-height:30px;" size="18" @click="componentsChange(8)"/>
                    <Icon type="md-paper-plane" v-show="pageType == 5" style="float:right;margin-right:15px;line-height:30px;" size="18" @click="componentsChange(6)"/>
                </div>
            </div>
            
            <div class="component" :is="componentsView"></div>
        </div>
        <div class="bg_image" v-show="bgImage">
            <div class="title">
                更换背景<Icon style="float:right;margin-right:15px;line-height:30px;" size="18" type="md-close" @click="bgImage = false"/>
            </div>
            <div class="bg_img" v-for="(item, index) in imgs" :key="index" :style="item" @click="changeBgImg(item)"></div>
        </div>
    </div>
</template>

<script>
import index from './index.js';
export default {
	...index
};
</script>

<style scoped src="./index.less"></style>