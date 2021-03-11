<template>
  <div>
    <ul>
      <li v-for="(m,index) in messages">
        <router-link :to="{name:'detail',params:{id:m.id}}">{{m.title}}</router-link>
        <button @click="pushShow(m.id)">push查看</button>
        <button @click="replaceShow(m.id)">replace查看</button>
      </li>
      <button @click="$router.back()">返回</button>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",

  data() {
    return {
      messages: []
    }
  },
  mounted() {
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'm1'},
        {id: 3, title: 'm2'},
        {id: 4, title: 'm3'}
      ]
      this.messages = messages
    }, 1000)
  },
  methods:{
    pushShow(id){
      console.log(this.$router)
      this.$router.push({name:'detail',params:{id:id}})
    },
    replaceShow(id){
      console.log(this.$router)
      this.$router.replace({name:'detail',params:{id:id}})
    }
  }
}
</script>

<style scoped>

</style>