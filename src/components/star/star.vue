<template>
  <div class="star-wrapper">
    <span v-for="item in totalStar" :key="item.index" :class="[item.class,'star']"></span>
  </div>
</template>

<script>
var starLength = 5;// 星星个数

export default {
  props: ['score'],
  computed: {
    totalStar () {
      var result = [];
      var num = Math.floor(this.score);
      // 满分5分,向下取整
      if (this.score > starLength) {
        num = starLength;
      }
      for (let i = 0; i < num; i++) {
        result.push({class: 'totalStar'});
      }
      // 看看有没有小数点，有则半星
      if (this.score % 1 !== 0) {
        result.push({class: 'halfStar'});
        result.shift();
      }
      for (let i = 0; i < (starLength - num); i++) {
        result.push({class: 'noStar'});
      }
      return result;
    }
  }
}
</script>

<style lang="less">
.star-wrapper {
  width:100%;
  text-align: center;
  .star {
    display: inline-block;
    margin:10px;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
  }
  .totalStar{
    background-image: url('star_on@2x.png');
  }
  .halfStar{
    background-image: url('star_half@2x.png');
  }
  .noStar{
    background-image: url('star_off@2x.png');
  }
}

</style>
