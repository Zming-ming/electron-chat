<template>
    <div class="login"> 
        <div class="frame">
            <Icon style="float:right;margin-right:15px;line-height:30px;" size="18" type="md-close" @click="closeWindow"/>
        </div>
        <div class="form">
            <form>
                <Input prefix="md-mail"  type="email" placeholder="Enter email..." style="width:100%;" />
                <Input prefix="md-lock" type="password" password placeholder="Enter something..." style="width:100%;margin-top:20px;" />
                <div style="margin-top:10px;font-size:12px;">
                    <Checkbox v-model="single" style="color:#FFF;">记住密码</Checkbox>
                    <span style="float:right;color:#2d8cf0;font-weight:900;">忘记密码？</span>
                    <span style="width:100%;margin-top:10px;float:right;text-align:center;color:#FFF;">还没有账号，去<span style="color:#2d8cf0;font-weight:900;" @click="toRegister"> 注册</span></span>
                </div>
                <Button type="default" ghost style="width:40%;margin-left:30%;margin-top:50px;" @click="handleSubmit">登录</Button>
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