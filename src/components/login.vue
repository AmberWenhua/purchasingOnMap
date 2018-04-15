<template>
<div>
     <header class="header clearfloat">
        <router-link tag="i" class="return btnclick" to="/home"></router-link>
        <span class="title">登录</span>
    </header>
    
    <div class="contain-box">
        <ul class="login_contain">
            <li class="label-li1 clearfloat">
                <div class="basic-label id_bg">账号：</div>
                <div class="basic-inputbox">
                    <input class="basic-input" type="tel" id="username" value="" placeholder="请输入您的手机号">
                </div>
            </li>
            <li class="label-li1 label-last clearfloat">
                <div class="basic-label password_bg">密码：</div>
                <div class="basic-inputbox">
                    <input class="basic-input" type="password" id="password" value="" placeholder="请输入您的账号密码">
                </div>
            </li>
        </ul>
        <div class="login-btn">
            <button id="btn-login" class="btn-basic btnclick" disabled>登陆</button>
        </div>
        <div class="login-btn login_btn2">
            <router-link class="enroll btnclick" tag="span" to="/register">注册</router-link>
            <router-link class="forgert-pass btnclick" tag="span" to="/forgetpassword">忘记密码?</router-link>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name:"login",
  data(){
      return{
      }
  },
}
</script>
<style>
@import "../assets/css/public.css";
@import "../assets/css/login.css";
</style>
