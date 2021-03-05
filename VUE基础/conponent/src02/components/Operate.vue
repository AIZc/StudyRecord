<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
          <span>已完成{{completedSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="completedSize>0" @click="clearCompletedTodos">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Operate",
  props:['todos','clearCompletedTodos','checkAll'],
  data(){
    return {
    }
  },
  computed:{
    completedSize () {
        return this.todos.reduce((preTotal,todo,index)=>preTotal+(todo.completed ? 1 : 0),0)
    },
    isCheckAll:{
      get (){
        return this.todos.length === this.completedSize
      },
      set (value){
        this.checkAll(value)
      }
    }
  }
}
</script>

<style scoped>
/*  operate*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>