<template>
  <div id="app">  
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
      <img src="./assets/img/首页.png" alt="" slot="item-icon"/>
      <div slot="item-text">首頁</div>
      </tab-bar-item>
      <tab-bar-item>
      <img src="./assets/img/会员.png" alt="" slot="item-icon"/>
      <div slot="item-text">会员</div>
      </tab-bar-item>
      <tab-bar-item>
      <img src="./assets/img/扫一扫.png" alt="" slot="item-icon"/>
      <div slot="item-text">扫一扫</div>
      </tab-bar-item>
      <tab-bar-item>
      <img src="./assets/img/设置.png" alt="" slot="item-icon"/>
      <div slot="item-text">设置</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar.vue'
import TabBarItem from './components/tabbar/TabBarItem.vue'


export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
.tab-bar-item img{
  width:40px;
  height: 40px;
  margin-top:3px;
  vertical-align: middle;
  margin-bottom:2px;
}

</style>
