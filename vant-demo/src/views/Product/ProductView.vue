<template>
  <div class="product-container">
    <!-- 上拉刷新 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <!-- 商品页顶部标题组件 -->
      <van-nav-bar class="my-nav-bar" :title="title" :fixed="true" :placeholder="true" />

      <!-- 商品页轮播图组件 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
        <van-swipe-item><img src="@/assets/1.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="@/assets/2.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="@/assets/3.jpg" alt="" /></van-swipe-item>
        <van-swipe-item><img src="@/assets/4.jpg" alt="" /></van-swipe-item>
      </van-swipe>

      <div class="recommend">
        <p>热门推荐</p>
      </div>

      <!-- 商品页商品组件 -->

      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-card v-for="item in CartList" :key="item.id" :tag="item.goods_tag" :price="item.goods_price" :desc="item.goods_description" :title="item.goods_title" :thumb="item.goods_img"> </van-card>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 导入 axios 库
import axios from 'axios'

export default {
  data() {
    return {
      title: '商城',
      // 商品列表数组
      CartList: [],
      loading: false,
      finished: false,
      refreshing: false,
      // 每页个数
      resNumber: 10,
      // 当前物品个数+1（充当下次请求接口数据索引值）
      number: 0
    }
  },

  methods: {
    // 封装请求数据的方法
    // async initCartList() {
    //   // 调用 axios 的 get 方法，请求数据
    //   const { data: res } = await axios.get('/api/get/goodslist')
    //   if (res.status === 200) {
    //     this.CartList = res.list
    //   }
    // },

    // 上拉加载更多
    async onLoad() {
      // 一、 调用 axios 的 get 方法，请求接口数据
      const { data: res } = await axios.get('/api/get/goodslist')

      // 二、执行相应操作
      if (res.status === 200) {
        // 请求到的数组用list装起来
        var list = []
        for (let i = 0; i < this.resNumber; i++) {
          list.push(res.list[i + this.number])
        }

        // 去除数组中undefined
        for (let item of list) {
          if (item) {
            this.CartList.push(item)
          }
        }

        // console.log(this.CartList)
        // 更新当前素组个数
        this.number = this.CartList.length

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.CartList.length >= res.list.length) {
          this.finished = true
        }
      }
    },

    // 下拉刷新页面
    onRefresh() {
      // 清空列表数据
      this.finished = false
      this.CartList = []

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()

      this.refreshing = false
    }
  },

  created() {
    // 调用封装的请求数据的方法
    // this.initCartList()
    this.onLoad()
    this.onRefresh()
  }
}
</script>

<style lang="less" scoped>
.product-container {
  margin: 0 auto;
  .my-nav-bar {
    margin-bottom: 10px;
  }
  .my-swipe {
    margin: 0 auto;
    border-radius: 10px;
    width: 98%;
    .van-swipe-item {
      // color: #fff;
      // font-size: 20px;
      line-height: 100%;
      // text-align: center;
      // background-color: #39a9ed;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .recommend {
    p {
      font-weight: 700;
      margin-left: 6px;
      color: #111;
    }
  }
}
</style>
