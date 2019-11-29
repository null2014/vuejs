<template>
<div id="tab-bar">
  <slot></slot>
</div> 
</template>

<script>
import TabBarItem from "./TabBarItem.vue"
export default {
  name:'TabBar',
  components:{
    TabBarItem
  }
  
}
</script>

<style scoped>
#tab-bar{
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 65px;
  border: 1px solid #cccccc;
}

</style>