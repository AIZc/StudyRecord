<template>
    <div class="h-full bg-main relative o-hidden">
        <IndexTake @sendCurStatus="getCurStatus" @sendResult="handleResult"></IndexTake>
        <IndexHome ref="indexHome" @sendCurStatus="getCurStatus" @sendResult="handleResult"></IndexHome>
        <IndexResult ref="IndexResult"></IndexResult>
    </div>
</template>

<script>
import IndexTake from './components/IndexTake'
import IndexHome from './components/IndexHome'
import IndexResult from './components/IndexResult'
export default {
    components: {
        IndexTake,
        IndexHome,
        IndexResult
    },
    methods: {
        getCurStatus(val) {
            this.$refs.indexHome.changeStatus(val)
            this.$refs.IndexResult.changeStatus(val)
        },
        handleResult(res) {
            this.$refs.IndexResult.getResult(res)
        }
    }
}
</script>

<style>

</style>