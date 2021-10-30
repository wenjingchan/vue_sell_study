<template>
  <div class="sell-header" :style="{background:backgroundUrl,'background-repeat': 'no-repeat','background-size': '100% 100%',color: '#fff'}">
    <div class="seller-info">
      <div class="content-wrapper">
        <img :src="seller.avatar">
        <div class="seller-profile">
          <p><span class="brandLogo">品牌</span>{{seller.name}}</p>
          <p>{{seller.delivery}}/{{seller.deliveryTime}}分钟送达</p>
          <p><span :class="[seller.discount[0].type,'discountIcon']" ></span>{{seller.discount[0].content}}</p>
        </div>
      </div>
      <div class="announcement" @click="showDetail"><span class="announcementIcon">公告</span>{{seller.announcement}}</div>
    </div>
    <!-- 动画过渡 -->
    <transition name="detailFade">
      <div class="detail" v-show="showDetailFlag" @click="hideDetail">
        <div style="text-align: center;">{{seller.name}}</div>
        <v-star :score="seller.score"></v-star>
        <v-line text="优惠信息"></v-line>
        <div class="discount-wrapper">
          <p v-for="item in seller.discount" :key="item.index">
            <span :class="[item.type,'discountIcon']"></span>
            {{item.content}}
          </p>
        </div>
        <v-line text="商家公告"></v-line>
        <div class="announcement">{{seller.announcement}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
import line from '@/components/line/line'
import star from '@/components/star/star'

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      backgroundUrl: 'url(' + this.seller.avatar + ')',
      showDetailFlag: false
      // seller: {
      //   avatar: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
      //   name: '天天美食',
      //   delivery: '蜂鸟专送',
      //   deliveryTime: '38',
      //   announcement: '粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。',
      //   discount: [
      //     {type: 'decrease', content: '在线支付满28减5'},
      //     {type: 'discount', content: '在线支付满28减5'},
      //     {type: 'guarantee', content: '在线支付满28减5'},
      //     {type: 'invoice', content: '在线支付满28减5'},
      //     {type: 'special', content: '在线支付满28减5'}
      //   ]
      // }
    }
  },
  methods: {
    showDetail () {
      this.showDetailFlag = true;
    },
    hideDetail () {
      this.showDetailFlag = false;
    }
  },
  components: {
    'v-line': line,
    'v-star': star
  }
}
</script>

<style lang="stylus">
bg-image($url) // 当dpr不同时，背景图片的切换函数
  background-image:url($url + "@2x.png")

.seller-info
  overflow: hidden;
  .content-wrapper
    padding: 24px 12px 18px 24px;
    & > img
      width:64px;
      height:64px;
      vertical-align: top;
    .seller-profile
      display:inline-block;
      margin-left:20px;
      p
        margin:0;
        font-size:14px;
        .discountIcon
          display:inline-block;
          width: 12px;
          height: 12px;
          background-repeat: no-repeat;
          background-size: 12px 12px;
          vertical-align: middle;
          margin-right: 5px;
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
      .brandLogo
        display:inline-block;
        background:red;
        padding: 0.5px 4px;
        color: #fff;
        margin-right: 5px;
        border-radius: 3px;
  .announcement
    font-size:12px
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7,17,27,0.2);
    color:#fff
    padding:5px 18px;
    .announcementIcon
      display:inline-block;
      background:#fff;
      padding: 0.5px 4px;
      margin-right: 5px;
      border-radius: 3px;
      color:#000;
.sell-header
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #fff;
  height:100%;
.detail
  position:absolute;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
  background-color: rgba(7,17,27,0.8);
  opacity: 1;
  padding: 24px 30px;
  box-sizing: border-box;
  &.detailFade-enter-active, &.detailFade-leave-active
    transition:all 0.5s;
  &.detailFade-enter, &.detailFade-leave-to
    width:0px;//没有这一句，点击公告也会导致商家详情隐藏，但是没有了向左移走的那个过渡效果
  .discount-wrapper, .announcement
    margin: 10px 60px;
    font-size: 14px;
  .discountIcon
    display:inline-block;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    vertical-align: middle;
    margin-right: 5px;
    &.decrease
      bg-image('decrease_1')
    &.discount
      bg-image('discount_1')
    &.guarantee
      bg-image('guarantee_1')
    &.invoice
      bg-image('invoice_1')
    &.special
      bg-image('special_1')
</style>
