<template>
  <transition name="foodMove">
    <div class="food" v-show="showFoodDetail" ref="food">
        <div class="foodWrapper">
            <span class="iconfont icon-arrowleftthin" @click="hideDetail"></span>
            <div class="image-wrapper">
              <img :src = "food.icon">
            </div>
            <div class="food-content">
              {{food.name}}
            </div>
        </div>
    </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll' // 导入滚动类库

export default{
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {
      showFoodDetail: false
    }
  },
  methods: {
    showDetail () {
      this.showFoodDetail = true;
      this.$nextTick(() => {
        if (!this.foodScroll) {
          console.log($('.food').height());
          console.log($('.foodWrapper').height());
          this.foodScroll = new BScroll(this.$refs.food, {
            click: true
          })
        } else {
          this.foodScroll.refresh();
        }
      });
    },
    hideDetail () {
      this.showFoodDetail = false;
    }
  }
}
</script>

<style lang="stylus">
.food
  position fixed
  top 0
  left 0
  width 100%
  background-color rgba(7,17,27,0.8)
  height 100%
  overflow hidden
  // transform translateX(0%) //可有可无，定义动画初始状态和结束状态比较重要
  .foodWrapper
    &.foodMove-enter-active, &.foodMove-leave-active
      transition all 1s
    &.foodMove-enter
      transform translateX(100%)
    &.foodMove-leave-to
      transform translateX(-100%)
    .icon-arrowleftthin
      color: #fff;
      position: fixed;
      top: 10px;
      left: 10px;
      font-size: 26px;
      z-index 10
    .image-wrapper
      position: relative
      width: 100%
      height: 0
      padding-top: 100% //防止图片没有刷出来，高度为0，better-scroll不起作用
      img
        position absolute
        top 0
        left 0
        width 100%
        height 100%
    .food-content
      padding 18px
</style>
