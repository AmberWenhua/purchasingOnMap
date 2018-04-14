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
        <footer-nav></footer-nav>
      </div>
  </div>
</template>

<script>
import header from './home/header.vue'
import bmap from './home/map.vue'
import footer from './home/footer.vue'

export default {
  name: 'home',
  data(){
    return {
      shadow : ''
    }
  },
  components:{
    "header-search": header,
    "bmap": bmap,
    "footer-nav":footer
  },
  methods:{
    result : function(data){
      this.shadow = data;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 @import "../assets/css/public.css";
  @import "../assets/css/font.css";
</style>
