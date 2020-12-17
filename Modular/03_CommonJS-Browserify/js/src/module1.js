/*
* 第一种暴露方式：module.exports = value
* */
module.exports = {
  data:'atguigu,前端课程,哈哈',

  test () {
    console.log(this.data)
  }
}