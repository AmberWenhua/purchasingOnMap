<template>
  <div class="page-box">
    <header-search  v-on:showPanel = "result">
          <template>
            <span>北京</span>
            <i class="iconfont icon-xiala"></i>
          </template>
      </header-search>
      <div class="page-box" :style="{ opacity : this.shadow ? 0.1 : 1}" >
        <bmap></bmap>
        <tools></tools>
        <footer-nav></footer-nav>
        <popFooter v-on:popShow = "result1" :style="{ top : this.isClick ?  '50rem' : '100rem'}" ></popFooter>
      </div>
  </div>
</template>

<script>
import header from './home/header.vue'
import bmap from './home/map.vue'
import footer from './home/footer.vue'
import tools from './tools/tools.vue'
import popFooter from './home/pop-footer.vue'

export default {
  name: 'home',
  data(){
    return {
      shadow : '',
      isClick:'',
    }
  },
  components:{
    "header-search": header,
    "bmap": bmap,
    "footer-nav":footer,
    'tools':tools,
    'popFooter':popFooter,
  },
  methods:{
    result : function(data){
      this.shadow = data;
    },
    result1:function(data){
      this.isClick = data;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../assets/css/public.css";
@import "../assets/css/font.css";
</style>
