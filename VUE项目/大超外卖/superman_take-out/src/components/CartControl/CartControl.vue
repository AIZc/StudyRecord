<template>
  <div class="cartcontrol">
    <transition name='move'>
      <div class="iconfont icon-jian" v-show="food.count" @click="changeFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
    <div class="iconfont icon-jia" @click="changeFoodCount(true)"></div>
  </div>

</template>

<script>
  export default {
    props: {
      food: {
        required: true,
        type: Object
      }
    },
    methods: {
      changeFoodCount(isAdd){
        this.$store.dispatch('changeFoodCount', {isAdd, food: this.food})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .icon-jian
      padding 2px
      color $green
      &.move-enter-active, &.move-leave-active
        transition all .5s
      &.move-enter, &.move-leave-to
        transform translateX(20px) rotate(180deg)
        opacity 0
    .cart-count
      display: inline-block
      width: 14px
      text-align: center
      font-size: 17px
      color: rgb(147, 153, 159)
      margin 0 8px
    .icon-jia
      padding: 2px
      color $green
    .iconfont
      display: inline-block
      border-radius 50%
      font-size 25px
      transform translateY(11%)

</style>
