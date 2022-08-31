//引入mock模块
import Mock from 'mockjs'

const data = Mock.mock({
  'goodsList|86': [
    {
      goods_id: '@increment()',
      goods_title: '@ctitle(2,18)',
      goods_description: '@csentence(5,40)',
      goods_tag: '@cword(2,4)',
      goods_price: '@float(0.01,999,1,2)',
      goods_img: "@image('800x800','#FFE4B5','#333','images')"
    }
  ]
})

// 定义get请求
Mock.mock('/api/get/goodslist', 'get', () => {
  return {
    status: 200,
    message: '商品列表',
    list: data.goodsList,
    total: data.goodsList.length
  }
})
