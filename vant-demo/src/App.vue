<template>
  <div id="app">
    <!-- 路由占位符 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- 全局底部导航栏 -->
    <van-tabbar v-model="active" :fixed="true" :placeholder="true">
      <van-tabbar-item to="/" icon="home-o">产品</van-tabbar-item>
      <van-tabbar-item to="/classify" icon="cluster-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // 全局底部导航栏默认选中索引
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  min-width: 375px;
  max-width: 820px;
  margin: 0 auto;
  .van-tabbar__placeholder {
    margin-top: 10px;
  }
}
</style>
