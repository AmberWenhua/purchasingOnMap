<template>
  <div>
    <header class="header clearfloat">
        <i class="return btnclick"></i>
        <span class="title">注册</span>
        <router-link class="return-login btnclick" tag="span" to="/login">登录</router-link>
    </header>
    <div class="contain-box">
        <ul class="login_contain">
            <li class="label-li1 clearfloat">
                <label class="basic-label id_bg">账号：</label>
                <div class="basic-inputbox">
                    <input id="usernameregister" class="basic-input" type="text" value="" placeholder="请输入您的手机号">
                </div>
            </li>
            <li class="label-li1 clearfloat">
                <div id="makesure" class="identy_bg basic-label">验证码：</div>
                <div class="basic-inputbox">
                    <div class="clearfloat">
                        <input id="ipt-getcode" class="input-code" type="text" value="" placeholder="请输入您的验证码">
                        <button class="get-code" data-loading="还剩{d}秒" data-time="5">获取验证码</button>
                    </div>
                </div>
            </li>
            <li class="label-li1 clearfloat">
                <div class="basic-label password_bg">密码：</div>
                <div class="basic-inputbox">
                    <input id="write-password" class="basic-input"  type="password" value="" placeholder="请输入您的登录密码">
                </div>
            </li>
            <li class="label-li1 clearfloat">
                <div class="basic-label password_bg">确认密码：</div>
                <div class="basic-inputbox">
                    <input id="sure-password"  class="basic-input" type="password" value="" placeholder="请输入您的登录密码">
                </div>
            </li>
            <li class="label-li1 label-last clearfloat">
                <div class="basic-label identity_bg">身份：</div>
                <div class="basic-inputbox input-select">
                    <input class="basic-input"type="text" value="" placeholder="经纪人" >
                    <div class="ident-select">
                        <i class="ident-select-bg click-select"></i>
                        <ul class="ident-ul">
                            <li class="ident-li">经纪人</li>
                            <li class="ident-li">小业主</li>
                            <li class="ident-li">运营商</li>
                            <li class="ident-li">代理商</li>
                            <li class="ident-li">开发商</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
        <div class="login-btn">
            <button id="register-sure" class="btn-basic click-pop" data-target-id="sure">确定</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"register"
}
</script>

<style>
@import "../assets/css/public.css";
@import "../assets/css/login.css";
/* @import "../assets/css/login/register.css"; */
</style>


