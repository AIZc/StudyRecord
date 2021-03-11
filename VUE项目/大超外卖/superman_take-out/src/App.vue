<template>
	<div>
    <router-link to="Search"></router-link>
    <router-view></router-view>
    <router-view></router-view>
	</div>
</template>

<script>

export default {
	name: "App",
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "common/stylus/mixins.styl"

</style>