<template>
  <div class="cartControllWrapper">
    <transition name="rollingBall">
      <span v-show="food.count > 0" class="cart-decrease iconfont icon-decrease" @click.stop="decreaseFood"></span>
    </transition>
    <span v-show="food.count > 0">{{food.count}}</span>
    <span class="cart-add iconfont icon-add" @click.stop="addFood"></span>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addFood () {
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
      // 出发小球动画
      this.$emit('addFoodEventOfFather', this.food);// 调用父组件的addFoodEventOfFather自定义事件，并将参数传给父组件（goods.vue/food.vue）
    },
    decreaseFood () {
      this.food.count--;
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// @import "../../common/style/iconfont.css"
.cartControllWrapper {
  position absolute
  right 10px
  bottom 10px
  .iconfont {
    color #9191d2
    cursor pointer
  }
  span{
    display inline-block
    padding 0px 5px
  }
}
</style>
