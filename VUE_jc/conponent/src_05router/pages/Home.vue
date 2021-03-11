<template>
  <div>
    <h2>Home</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link :to="{name:'news'}">news</router-link>
      </li>
      <li>
        <router-link to="/home/message">messages</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>