<template>
<div>
     <header class="header clearfloat">
        <i class="return btnclick" id="no-login" data-target-page="home" data-target-doc="index"></i>
        <span class="title">登录</span>
    </header>
    
    <div class="contain-box" id="login">
        <ul class="login_contain" id="form-login" data-target-id="btn-login">
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
            <button id="btn-login" class="btn-basic btnclick" data-target-page="my" data-target-doc="my" disabled>登陆</button>
        </div>
        <div class="login-btn login_btn2">
            <span class="enroll btnclick" data-target-page="register" data-target-doc="login">注册</span>
            <span class="forgert-pass btnclick" data-target-page="forgetpassword" data-target-doc="login">忘记密码?</span>
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
