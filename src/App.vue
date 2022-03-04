<template>
  <div class="container">
      <add-todo />
      <!-- <filter-todo /> -->
      <todo-list />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import AddTodo from './components/AddTodo.vue'
// import FilterTodo from './components/FilterTodo.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo,
    // FilterTodo,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Gochi+Hand');

#app {
  font-family: 'Gochi Hand', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 100%;
  height: auto;
  min-height: 500px;
  max-width: 500px;
  min-width: 250px;
  background: #f1f5f8;
  background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
  background-size: 25px 25px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;
  padding: 1rem;
  box-sizing: border-box;
}
</style>
