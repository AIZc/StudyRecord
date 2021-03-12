<template>
  <div>
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar/tabbar";

export default {
  name: "App",
  components: {tabbar}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "common/stylus/mixins.styl"

</style>