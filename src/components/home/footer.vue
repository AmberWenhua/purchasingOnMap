<template lang="html">
    <!--底部-->
	<footer class="footer">
		<ul class="footer-nav">
			<router-link to="/home">
				<li class="btnclick">
					<i class="icon-footer icon-footer1" :class="{'icon-footer-click1': !is}" ></i><span class="click-color">首页</span>
				</li>
			</router-link>
			<li class="btnclick" >
				<i class="icon-footer icon-footer2 icon-footer-click2"></i><span class="click-color">预约</span>
			</li>
			<li class="btnclick" >
				<i class="icon-footer icon-footer3"></i>
			</li>
			<li class="btnclick">
				<i class="icon-footer icon-footer4 icon-footer-click4"></i><span class="click-color">信息</span></li>
			<li class="btnclick">
				<i class="icon-footer icon-footer5 icon-footer-click5"></i><span class="click-color">我</span>
			</li>
		</ul>
	</footer>
</template>

<script>
export default {
	name:"footer",
	data(){
      return {
		  is : false
	  }  
    },
	methods:{
	}
  
}
</script>

<style>
@import '../../assets/css/home/footer.css';
</style>


