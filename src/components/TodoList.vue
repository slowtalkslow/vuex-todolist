<template>
  <div class="todos">
    <div v-for="(todo, index) in allTodos" 
      :key="todo.id" 
      class="todo"
      :class="{completed: todo.completed}"
      @click="toggleTodo(todo.id)"
      @dblclick="deleteTodo(todo.id)">
      {{index+1}}.  {{ todo.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "TodoList",
  computed: mapGetters(['allTodos']),
  methods: {
    ...mapActions(['fetchTodos','deleteTodo','updateTodo','toggleTodo']),
  },
  created() {
    this.fetchTodos();
  }
}
</script>

<style>
.todo {
  text-align: left;
  position: relative;
  padding: 1rem 2rem;
  font-size: 1.5rem;
}
.todo:hover {
  text-decoration: line-through wavy #24bffb;
  cursor: pointer;
  user-select: none;
}
.completed {
  text-decoration: line-through wavy #24bffb;
}
</style>