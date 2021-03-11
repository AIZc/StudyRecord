<template>
  <div>
    <p>click {{count}} times,count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment If Odd</button>
    <button @click="incrementAsync">increment Async</button>

  </div>
</template>

<script>


import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  name: "App",
  computed:{
    // count () {
    //   return this.$store.state.count
    // },
    // evenOrOdd() {
    //   return this.$store.getters.evenOrOdd;
    // }
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
  methods:{
    ...mapMutations(['increment','decrement']),
    ...mapActions(['incrementAsync','incrementIfOdd']),
  }
}
</script>


<style scoped>

</style>