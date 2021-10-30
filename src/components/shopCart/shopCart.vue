<template>
  <div class="shopCartWrapper" @click="toggleList">
    <div v-show="showList" class="cartDetail">
      <div class="shopCartHeader">购物车</div>
      <div class="shopCartDetailList" v-for="(food, index) in selectedFoods" :key="index">
        <div>{{food.name}}</div>
        <div>￥{{food.price}}</div>
        <cart-controll :food="food" @addFoodEventOfFather="addFood"></cart-controll>
      </div>
    </div>
    <div class="shopCartContent">
      <div class="cart-icon-warpper">
        <span class="foodNum" v-show="foodNum > 0">{{foodNum}}</span>
        <span class="icon-shop-cart iconfont"></span>
      </div>
      <div class="priceDetail">
        <div class="price">￥{{totalPrice}}元</div>
        <div class="deliverPrice">另需配送费￥{{deliverPrice}}元</div>
      </div>
      <div class="cartBtn">
        <span v-if="totalPrice >= lessPrice">去结算</span>
        <span v-if="totalPrice < lessPrice">还差{{lessPrice - totalPrice}}起送</span>
      </div>
    </div>
  </div>
</template>

<script>
import CartControll from './cartControll.vue';
// import BScroll from 'better-scroll' // 导入滚动类库

export default {
  props: {
    selectedFoods: {
      type: Array
    },
    deliverPrice: {
      type: Number,
      default: 4
    },
    lessPrice: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {
      fold: true
    }
  },
  computed: {
    totalPrice () {
      var total = 0;
      this.selectedFoods.forEach((item) => {
        total += item.price * item.count;
      })
      return total;
    },
    foodNum () {
      var num = 0;
      this.selectedFoods.forEach((item) => {
        num += item.count;
      })
      return num;
    },
    showList () {
      if (this.totalPrice < 0) {
        this.fold = true;
        return false;
      }
      return false;
    }
  },
  methods: {
    toggleList () {
      this.fold = !this.fold;
    },
    addFood () {
      console.log('shopcart add food');
    }
  },
  components: {
    'cart-controll': CartControll
  }
}
</script>

<style lang="stylus">
.shopCartWrapper
  height 48px;
  position fixed
  bottom 0
  left 0
  z-index 10
  background-color #2b343c
  width 100%
  .cartDetail
    position absolute
    bottom 48px
    left 0
    max-height 240px
    overflow hidden
    width: 100%;
    background: #fff;
    border-top 1px solid rgba(7,17,21,0.1)
    div
      height 48px
      box-sizing border-box
      border-bottom 1px solid rgba(7,17,21,0.1)
    .shopCartHeader
      padding 10px
      background #f3f5f7
    .shopCartDetailList
      height 100%
      position relative
      line-height 48px
      div:nth-child(2)
        position absolute
        right: 114px;
        top: 0px;
      .cartControllWrapper
        top 0
  .shopCartContent
    display flex
    height: 100%;
    .cart-icon-warpper
      position relative
      left 10px
      .foodNum
        position absolute
        top: -19px;
        right: -2px;
        background-color: #f00;
        color: #fff;
        padding: 0px 8px;
        z-index: 10;
        border-radius: 50%;
      .icon-shop-cart
        border: 7px solid #2b343c;
        background: #3bafe6;
        border-radius: 50%;
        padding: 8px;
        font-size: 25px;
        color: #fff;
        position relative
    .priceDetail
      padding 10px
      flex 1
      div
        color #fff
        padding: 0px 15px;
        display inline-block
      .deliverPrice
        border-left: 1px solid rgba(255,255,255,0.4);
        color: rgba(255,255,255,0.4);
    .cartBtn
      width 10%
      background-color: #0f9839;
      color #fff
      text-align center
      line-height 48px
</style>
