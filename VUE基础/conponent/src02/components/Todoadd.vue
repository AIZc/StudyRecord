<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title"/>
  </div>
</template>

<script>
export default {
  name: "Todoadd",
  props:{
    addTodo:Function
  },
  data(){
    return{
      title:''
    }
  },
  methods:{
    add(){
      const title = this.title.trim()
      //如果没有正常输入
      if (!title) return
      const todo = {
        id: Date.now(),
        title,
        completed:false
      }
      this.addTodo(todo)

      // 清除输入
      this.title = ''
    }
  }
}
</script>

<style scoped>

/*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>