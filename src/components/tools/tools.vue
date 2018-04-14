<template>
    <div class="tools-nav">
        <ul>
            <subway></subway>
        </ul>
    </div>
</template>
<script>
import subway from './tool/subway.vue'

export default {
    name:'tools',
    components:{
        'subway':subway,
    }
  
}
</script>
<style>
@import '../../assets/css/tools/tools.scss'
</style>

