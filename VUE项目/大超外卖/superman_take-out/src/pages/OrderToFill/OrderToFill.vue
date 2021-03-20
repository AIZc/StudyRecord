<template>
  <div class="orderToFillWrapper">
    <a class="back" @click="$router.back()">
      <i class="iconfont icon-arrow-left"/>
    </a>
    <GshopHeader :title="'确认订单'"/>
    <div class="orderToFill">
      <mt-field label="联系人" placeholder="联系人" v-model="linkman"></mt-field>
      <mt-field label="电话" placeholder="手机号码" type="tel" v-model="linkphone"></mt-field>
      <mt-field label="地址" placeholder="地址" type="textarea" rows="1" v-model="site"></mt-field>
      <mt-field label="备注" placeholder="备注" type="textarea" rows="2" v-model="remark"></mt-field>
    </div>
    <div class="orderContent">
      <ul>
        <li v-for="(food,index) in cartShops" :key="index">
          <van-card
              :num="food.count"
              :price="food.price"
              :desc="food.description"
              :title="food.name"
              :thumb="food.image"
          />
        </li>
      </ul>
    </div>
    <van-cell class="deliver" title="配送费" value="￥4" />
    <van-submit-bar :price="totalprices*100" button-text="提交订单" @submit="onsubmit"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field } from 'mint-ui'
import {SubmitBar,Card,Cell} from 'vant'
import {mapGetters,mapState} from "vuex";
Vue.component(Field.name,Field)
Vue.use(SubmitBar)
Vue.use(Card)
Vue.use(Cell)
export default {
  name: "OrderToFill",
  data(){
    return{
      linkman:'',
      linkphone:'',
      site:'',
      remark:''
    }
  },
  computed:{
    ...mapState({
      info: state => state.shop.shopInfo,
      cartShops: state => state.shop.cartShops,
      user: state => state.user
    }),
    ...mapGetters(['totalCount', 'totalPrice']),
    username(){
      return this.user.name?this.user.name:this.user.phone
    },
    totalprices(){
      return this.totalPrice + 4
    }
  },
  methods:{
    async onsubmit(){
      let {username,linkman,linkphone,site,remark,cartShops,totalprices} = this
      let result
      let orderConent = []
      let orderfood = {}
      cartShops.forEach(function (food) {
        orderfood.count = food.count
        orderfood.price = food.price
        orderfood.name = food.name
        orderfood.image = food.image
        orderConent.push(orderfood)
      })
      console.log(orderConent)
      result = await this.$API.getOrder({username,linkman,linkphone,site,remark,totalprices,orderConent:orderConent})
      console.log(result)
      
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.orderToFillWrapper
  width 375px
  height 667px
.orderToFill
  //bottom-border-1px(grey)
  position absolute
  width 90%
  top 45px
  left 5%
.orderContent
  bottom-border-1px(grey)
  position absolute
  width 100%
  top 254px
.back
  position: fixed
  top: 6px
  left: 0
  z-index 1005
  .icon-arrow-left
    display: block
    padding: 5px
    font-size: 20px
    color: #fff
.deliver
  position fixed
  left 0
  width 31%
  bottom 0
  z-index 1000
</style>