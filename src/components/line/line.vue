<template>
  <div class="line-wrapper">
    <div class="lineStyle"></div>
    <div class="textStyle">{{text}}</div>
    <div class="lineStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {type: String}
  }
}
</script>

<style lang="less">
@height: 15px;
@halfHeight: @height / 2;

.line-wrapper {
  height:@height;
  position: relative;
  margin: 10px;
  display: flex;
  justify-content: center;
  .lineStyle {
    height: 100%;
    border-bottom: 1px solid #eee;
    width:45%;
  }
  .textStyle {
    line-height: @height;
    position: relative;
    top: 50%;
    padding: 0px 5px;
  }
}
</style>
