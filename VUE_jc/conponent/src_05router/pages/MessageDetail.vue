<template>
  <div>
    <h5>详细信息</h5>
    <ul>
      <li>id:{{id}}</li>
      <li>title:{{detail.title}}</li>
      <li>content:{{detail.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MessageDetail",
  props:['id'],
  data (){
    return {
      detail:{},
      AllMessageDetails:[
        {id: 1, title: 'm1',content:'123123m1'},
        {id: 3, title: 'm3',content:'123123m3'},
        {id: 4, title: 'm4',content:'123123m4'}
      ]
    }
  },
  watch:{
    '$route'(to,from){
      setTimeout(()=>{
        const id = to.params.id * 1
        const detail = this.AllMessageDetails.find(detail=>detail.id===id)
        this.detail = detail
      },1000)
    }
  }
}
</script>

<style scoped>

</style>