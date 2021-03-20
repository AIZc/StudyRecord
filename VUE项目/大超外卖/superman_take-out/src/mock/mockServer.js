import Mock from 'mockjs'
import data from './data.json'
// 测试


// 商家数据接口
Mock.mock('/api/getShopDatas', {code: 0, data: data.goods})


// 定义mock接口: ratings
Mock.mock('/api/ratings', {code: 0, data: data.ratings})

// 定义mock接口: info
Mock.mock('/api/info', {code: 0, data: data.info})

console.log('mockServer...')
// 不用向外暴露任何东西