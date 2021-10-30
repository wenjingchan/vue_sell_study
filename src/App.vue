<template>
  <div id="sellApp">
    <v-header :seller="seller"></v-header>
    <div class="sell-router-container">
      <div class="router-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="router-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="router-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header'
import sellerData from '@/common/data/seller.json'

export default {
  name: 'App',
  data () {
    return {
      seller: sellerData
    }
  },
  methods: {
    routeClick (event) {
      console.log('点击了');
      $('.router-item').removeClass('clickItem');
      if (event.target.className.includes('router-item')) {
        $(event.target).addClass('clickItem')
      } else {
        $(event.target).parent('.router-item').addClass('clickItem');
      }
    }
  },
  mounted () {
    // 为router-link绑定点击事件
    $('.router-item').click(this.routeClick);
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body
  margin:0;
  padding:0;
.sell-router-container
  width: 100%;
  overflow: hidden;
  border-bottom:1px solid red;
  .router-item
    width:33%;
    float:left;
    text-align: center;
    border: 1px solid #eee;
    padding: 10px 0px;
    a
      text-decoration: none;
      color: #000;
    &.clickItem > a
      color: red;
</style>
