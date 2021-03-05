<template>
  <div class="todo-container">
    <div class="todo-wrap">

      <Todoadd :addTodo="addTodo"></Todoadd>
      <List :todos="todos" :delTodo="delTodo"></List>

      <Operate :todos="todos" :clearCompletedTodos="clearCompletedTodos" :checkAll="checkAll"></Operate>
    </div>
  </div>
</template>


<script>
import Todoadd from "./components/Todoadd";
import List from "./components/List";
import Operate from "./components/Operate";
import {saveTodos,readTodos} from './utils/storageUtils'
export default { // 配置对象
  data() {
    return {
      todos:[]
    }
  },
  mounted() {
    this.todos = readTodos()
  },
  methods:{
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    delTodo (index) {
      this.todos.splice(index,1)
    },
    clearCompletedTodos (){
      this.todos = this.todos.filter((todo,index)=> !todo.completed)
    },
    checkAll(isCheckAll){
      this.todos.forEach(todo=>todo.completed = isCheckAll)
    }
  },
  watch:{
    todos:{
      deep:true,  //深度监视
      // handler(value){
      //   //将todos保持到local
      //   saveTodos(value)
      // }
      handler:saveTodos
    }
  },
  components: {
    Todoadd,
    List,
    Operate
  }
}
</script>

<style scoped>

/*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>