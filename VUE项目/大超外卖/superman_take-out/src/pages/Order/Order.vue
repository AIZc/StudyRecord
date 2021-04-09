<template>
  <div class="order">
    <GshopHeader :title="'订单列表'"/>
    <section class="order_no_login" v-if="!username">
      <img src="../../common/images/order/person.png">
      <h3>登录后查看外卖订单</h3>
      <button @click="$router.replace('/login')">立即登陆</button>
    </section>
    <div class="orderList">
      <ul>
        <li class="orderItem" v-for="(orderItem,Index) in orderList" :key="Index">
            <van-cell :title="orderItem.shopname" value="已完成" />
            <ul class="ordercontent">
              <li class="foodItem" v-for="(foodItem,index) in JSON.parse(orderItem.ordercontent)" :key="index">
                  <van-card style="width: 120%"
                      :num="foodItem.count"
                      :price="foodItem.price"
                      :title="foodItem.name"
                      :thumb="foodItem.image"
                  />
                </li>
            </ul>
            <van-cell class="totalprice" title="菜品价+配送费==>总价" :value="orderItem.totalprices+'元'" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import Vue from 'vue'
  import {Cell,CellGroup} from 'vant'
  Vue.use(Cell)
  Vue.use(CellGroup)
  export default {
    data(){
      return{
        orderList:[],
      }
    },
    async mounted() {
      let result
      result = await this.$API.readOrder({username:this.username})
      this.orderList = result.data
    },
    computed:{
      ...mapState({
        user: state => state.user
      }),
      username(){
        return this.user.name?this.user.name:this.user.phone
      }
    },
    methods:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
  .order  //订单
    width 375px
    height 667px
    background-color: #f3f3f3
    .order_no_login
      padding-top 140px
      width 60%
      margin 0 auto
      text-align center
      >img
        display block
        width 100%
        height 30%
      >h3
        padding 10px 0
        font-size 17px
        color #6a6a6a
      >button
        display inline-block
        background #02a774
        font-size 14px
        color #fff
        border 0
        outline none
        border-radius 5px
        padding 10px 20px

    .orderList
      position absolute
      width 96%
      left 50%
      transform translateX(-50%)
      top 50px
      li.orderItem
        position absolute
        background-color: #fff
        width 100%
        bottom-border-1px(grey)
        ul.ordercontent
          display flex
          overflow auto
          transform translateY(-1%)
          padding 0 5px
          .foodItem
            bottom-border-1px(#f3f3f3)
            margin 0 20px
            width 50%
        .totalprice
          width 90%
          transform translateX(10%)
</style>
