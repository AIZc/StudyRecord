<template>
    <div class="w-full h-full flex j-center a-center flex-column">
        <h1 class="w-full text-title text-center m-0">
            <router-link to="/">
                404
            </router-link>
        </h1>
        <Loading></Loading>
    </div>
</template>

<script>
import Loading from './components/Loading'
export default {
    components: {
        Loading
    }
}
</script>

<style>

</style>