<template>
<div>
    <li class="tool" @click="show">
        <i class="iconfont icon-ditie" style="font-size:23px;"></i>
        <span class="tool-name">地铁</span>
    </li>
</div>
</template>
<script>
export default {
  name:'subway',
  data(){
      return{
          popShow: false,
      }
  },
  methods:{
      show(){
          this.popShow = true;
          this.$emit("showPanel",this.panelShow);
      }
  }
}
</script>
<style>
@import '../../../assets/css/tools/tools.scss';
</style>

