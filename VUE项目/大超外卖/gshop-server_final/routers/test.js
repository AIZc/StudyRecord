/* 
测试路由接口
*/
module.exports = function (router) {
  // 定义GET测试接口
  router.get('/test_get', (req, res) => {
    const {name, pwd} = req.query
    setTimeout(() => {
      if (!name || !pwd) {
        res.send({
          code: 1, 
          msg: '找不到对应的用户'
        })
      } else {
        res.send({
          code: 0,
          data: { id: 2, name, pwd }
        })
      }
    }, 3000);
  })

  // 定义POST测试接口
  router.post('/test_post', (req, res) => {
    const {name, pwd} = req.body
    setTimeout(() => {
      if (!name || !pwd) {
        res.send({
          code: 1, 
          msg: '用户信息不完整'
        })
      } else {
        res.send({
          code: 0,
          data: { id: 4, name, pwd }
        })
      }
    }, 3000);
  })
}