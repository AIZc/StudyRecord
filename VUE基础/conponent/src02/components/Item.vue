<template>
  <li :style="{background:bgColor}" @mouseenter="enter(true)" @mouseleave="enter(false)">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" :style="{display:display}" @click="deleteTodo">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    todo: Object,
    delTodo: Function,
    index: Number
  },
  data() {
    return {
      bgColor: 'white',
      isShow: false,
      display: 'none'
    }
  },
  methods: {
    enter(isEnter) {
      if (isEnter) {
        this.bgColor = 'grey'
        this.isShow = isEnter
        this.display = 'block'
      } else {
        this.bgColor = 'white'
        this.isShow = isEnter
        this.display = 'none'
      }
    },

    deleteTodo() {
      if (window.confirm('确定删除吗?')) {
        this.delTodo(this.index)
      }
    }
  }
}
</script>

<style scoped>
/*item*/

li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>