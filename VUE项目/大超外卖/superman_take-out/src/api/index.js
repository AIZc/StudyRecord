import ajax from './ajax'
/* 根据经纬度获取位置详情 */
export const getAddress = (latitude, longitude) => ajax({
  url: `/position/${latitude},${longitude}`
})


/* 获取食品分类列表 */
export const getCategorys = () => ajax({
  url: '/index_category',
  headers: {
    needToken: true
  }
})


/*  根据经纬度获取商铺列表 */
export const getShopList = (latitude, longitude) => ajax({
  url: '/shops',
  params: {
    latitude,
    longitude
  },
  headers: {
    needToken: true
  }
})


/*  发送短信验证码  */
export const sendCode = ({phone}) => ajax({
  url: '/sendcode',
  params: {
    phone
  }
})


/* 用户名密码登陆 */
export const loginWithUserName = ({username, pwd, captcha}) => ajax({
  url: '/login_pwd',
  method: 'POST',
  data: {
    name: username,
    pwd,
    captcha:captcha
  },
  headers: {
    needToken: false
  }
})
/*添加订单*/
export const addOrder = ({username,linkman,linkphone,site,remark,totalprices,orderConent,shopName}) => ajax({
  url: '/add_order',
  method: 'POST',
  data: {
    name:username,
    linkman,
    linkphone,
    site,
    remark,
    totalprices,
    orderConent:JSON.stringify(orderConent),
    shopName

  },
  headers: {
    needToken: true
  }
})

/*读取订单*/
export const readOrder = ({username}) => ajax({
  url: '/read_order',
  method: 'POST',
  data: {
    name:username
  },
  headers: {
    needToken: false
  }
})

/* 手机号验证码登陆 */
export const loginWithPhone = ({phone, code}) => ajax({
  url: '/login_sms',
  method: 'POST',
  data: {
    phone,
    code
  }
})


/* 自动登录  */
export const autoLogin = () => ajax({
  url: '/auto_login',
  headers: {
    needToken: true
  }
  // params: {
  //   token: 'xxx'
  // }
})


/* 测试mock接口 */
export const test = () => ajax('/test')


//商家数据接口
export const getShopDatas = () => ajax({
  url: '/getShopDatas'
})

//商家详情info
export const getShopInfo = () => ajax({
  url:'/info'
})

export const getShopRatings = () => ajax({
  url:'/ratings'
})
