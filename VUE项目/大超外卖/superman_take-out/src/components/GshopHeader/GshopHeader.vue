<template>
  <header class="header">

    <slot name="left"></slot>
    <span class="header_title">
      <i class="iconfont icon-dizhi" v-if="this.$route.path === '/msite'"></i>
      <span class="header_title_text ellipsis">
        {{title}}
      </span>
    </span>
    <slot name="right"></slot>

  </header>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    props: {
      title: {
        required: true, // 必须传入
        type: String, // 传入的类型
        default: '超人外卖'
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    background-color #02a774
    position fixed
    z-index 1000
    left 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-70%)
      width 10%
      height 50%
      .icon-chaoren
        font-size 28px
        color #fff

    .header_title
      position absolute
      display flex
      justify-content center
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      color #fff
      text-align center
      .icon-dizhi
        color red
        font-size 25px
        line-height 45px

      .header_title_text
        font-size 17px
        color #fff
        display block

    .header_login
      font-size 14px
      color #fff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff
</style>
