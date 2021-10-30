<template>
  <div class="goods-wrapper">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <!-- 产品大类 -->
        <li v-for="(item, index) in goodsData" :key="index" :class="{selected: index === 0, menuItem:'menuItem'}" @click="selectMenu(item, event)">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <!-- 产品大类 -->
        <li v-for="(item, index) in goodsData" :key="index">
          <!-- 产品大类作为标题 -->
          <div class="goodsName">{{item.name}}</div>
          <ul class="foodsItemUl">
            <li v-for="(food, index) in item.foods" :key="index" class="foodItem" @click="selectFood(food)">
              <div class="foodIcon">
                <img :src="food.icon" style="width:70px">
              </div>
              <div class="foodContent">
                <p class="foodName">{{food.name}}</p>
                <p class="desc">{{food.description}}</p>
                <p class="sellCount"><span>月售{{food.sellCount}}</span><span>好评率{{food.rating}}</span></p>
                <p class="foodPrice">￥{{food.price}}</p>
              </div>
              <cart-controll :food="food" @addFoodEventOfFather="addFood"></cart-controll>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shop-cart :selectedFoods="selectedFoods" ref="shopCart"></shop-cart>
    <food :food="selectedFood" @addFoodEvent="addFood" ref="food"></food>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import goods from '@/common/data/goods'
import food from '@/components/food/food'
import BScroll from 'better-scroll' // 导入滚动类库
import cartControll from '@/components/shopCart/cartControll'
import shopcart from '@/components/shopCart/shopCart'

export default {
  name: 'goods',
  data () {
    return {
      goodsData: goods,
      selectedFood: {}// 点击的food，查看food详情
    }
  },
  computed: {
    selectedFoods () {
      var result = [];
      this.goodsData.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count && food.count > 0) {
            result.push(food);
          }
        });
      });
      return result;
    }
  },
  methods: {
    _initScroll () {
      // BScroll的第一个参数是DOM元素，可用this.$refs.menuWrapper获取。注意：$('.menu-wrapper')获取到的是jq对象
      this.menuScroll = new BScroll($('.menu-wrapper').get(0), {
        click: true
      });
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {});
    },
    selectMenu (item, event) {
      $('.menuItem').removeClass('selected');
      console.log(item);
      $(event.target).addClass('selected');
    },
    addFood () {
      console.log('addFood')
    },
    selectFood (food, $event) {
      this.selectedFood = food;
      this.$refs.food.showDetail();
    }
  },
  mounted () {
    this._initScroll();
    this.$nextTick(() => {
      // console.log('1211');
    })
    // console.log('121');
  },
  components: {
    'cart-controll': cartControll,
    'food': food,
    'shop-cart': shopcart
  }
}
</script>

<style lang="less">
.goods-wrapper {
  width:100%;
  position:absolute;//根据body元素来定位
  top: 177px;
  bottom:48px;
  overflow: hidden;
  display:flex;
  .menu-wrapper {
    width:6%;
    padding: 0px;
    background-color: #f3f5f7;
    .menuItem {
      font-size: 14px;
      height:50px;
      border-bottom: 1px solid rgba(7,17,27,0.1);
      padding: 10px;
      text-align: center;
      line-height: 50px;
      &.selected {
        background-color:#fff;

      }
    }
  }
  .foods-wrapper {
    // width:94%;
    padding: 0px;
    flex: 1;
    .goodsName {
       background-color: #f3f5f7;
       padding:5px 10px;
       border-left: 2px solid #bbb;
    }
    .foodsItemUl {
      margin: 0px 15px;
    }
    .foodItem {
      border-bottom: 1px solid rgba(7,17,27,0.1);
      font-size: 11px;
      display: flex;
      margin: 10px;
      position: relative;
      .foodContent{
        flex: 1;
        padding-left: 12px;
        p {
          margin: 0px;
          margin-bottom: 4px;
        }
      }
      .desc, .sellCount {
        color:#93999f;
      }
      .foodPrice{
        color:red;
      }
    }
  }
  ul {
    padding: 0px;
    margin: 0px;
  }
  li {
    list-style: none;
  }
}
</style>
