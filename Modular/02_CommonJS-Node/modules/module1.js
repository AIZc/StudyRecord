/*
* 第一种暴露方式：module.exports = value
* */



module.exports = {
    name: 'XueRui',
    getName() {
        console.log(`name is ` + this.name);
    }
}