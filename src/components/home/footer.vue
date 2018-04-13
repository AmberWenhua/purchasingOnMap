<template lang="html">
    <!--底部-->
	<footer class="footer">
		<ul class="footer-nav">
			<li class="btnclick" id="index" data-target-page="home" data-target-doc="index">
				<i class="icon-footer icon-footer1 icon-footer-click1"></i><span class="click-color">首页</span>
			</li>
			<li class="btnclick" id="order" data-target-page="order" data-target-doc="order">
				<i class="icon-footer icon-footer2 icon-footer-click2"></i><span class="click-color">预约</span>
			</li>
			<li class="btnclick" id="introduced" data-target-page="introduced" data-target-doc="introduced">
				<i class="icon-footer icon-footer3"></i>
			</li>
			<li class="btnclick" id="information" data-target-page="information" data-target-doc="information">
				<i class="icon-footer icon-footer4 icon-footer-click4"></i><span class="click-color">信息</span></li>
			<li class="btnclick" id="my" data-target-page="my" data-target-doc="my">
				<i class="icon-footer icon-footer5 icon-footer-click5"></i><span class="click-color">我</span>
			</li>
		</ul>
	</footer>
</template>

<script>
export default {
	name:"footer",
	mounted(){
        
    },
	methods:{
		
	}
  
}
</script>

<style>
@import '../../assets/css/home/footer.css';
</style>


