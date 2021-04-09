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
    <van-submit-bar :price="totalprices*100" button-text="提交订单" @submit="show=true"/>
    <div class="over"  v-show="show">
      <img  class="pay" src="./pay.jpg" alt="">
      <van-button type="info" class="btn modify" @click="show=false">修改信息</van-button>
      <van-button type="primary" class="btn payFinall" @click="onsubmit" v-if="!loading">已经支付</van-button>
      <van-button loading type="primary" class="btn payFinall" loading-text="下单中" v-else/>
    <div/>
  </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {Field, MessageBox} from 'mint-ui'
import {SubmitBar,Card,Cell,Button} from 'vant'
import {mapGetters,mapState} from "vuex";
Vue.component(Field.name,Field)
Vue.use(SubmitBar)
Vue.use(Card)
Vue.use(Cell)
Vue.use(Button)
export default {
  name: "OrderToFill",
  data(){
    return{
      linkman:'',
      linkphone:'',
      site:'',
      remark:'',
      show:false,
      loading:false
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
      cartShops.forEach((food) => {
        orderConent.push(food)
      })
      result = await this.$API.addOrder({username,linkman,linkphone,site,remark,totalprices,orderConent:orderConent,shopName:this.info.name})
      console.log(result)
      if(result.code === 0){
        // 登录成功
        // 跳转页面
        this.loading = true
        setTimeout(()=>{
          this.loading = false
          MessageBox('提示','下单成功')
          this.$router.replace('/order')
        },1500)


      }
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
  z-index 1001
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
.over
  position absolute
  width 100%
  height 100%
  background-color: grey
  opacity 0.9
  z-index 1005
  .pay
    width 70%
    position absolute
    left 50%
    top 15%
    transform translateX(-50%)
  .btn
    position absolute
    bottom 20%
  .modify
    left 20%
  .payFinall
    right 20%
    width 100px
</style>