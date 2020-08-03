<template>
    <div class="register">
        <div class="frame">
            <Icon style="float:right;margin-right:15px;line-height:30px;" size="18" type="md-close" @click="closeWindow"/>
        </div>
        <div class="form">
            <form>
                <Input prefix="md-mail"  type="email" placeholder="Enter email..." style="width: 100%;" />
                <Input prefix="md-lock" type="password" password placeholder="Enter something..." style="width: 100%;margin-top:20px;" />
                <Input prefix="ios-keypad" type="text" maxlength="4" placeholder="Enter code..." style="width: 60%;margin-top:20px;" />
                <Button type="default" ghost style="width: 35%;margin-top:20px;float:right;" @click="getCode">{{count}}</Button>
                <div style="margin-top:10px;font-size:12px;">
                    <span style="width: 100%;margin-top:20px;float:right;text-align:center;color:#FFF;">已有有账号，去<span style="color:#2d8cf0;font-weight:900;" @click="toLogin">登陆</span></span>
                </div>
                <Button type="default" ghost style="width:40%;margin-left:30%;margin-top:20px;" @click="handleSubmit">注册</Button>
            </form>
        </div>
        <div class="version">
            mingming@v{{ version }}
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