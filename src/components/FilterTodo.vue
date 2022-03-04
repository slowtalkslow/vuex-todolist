<template>
  <select @change="filterTodo($event)">
    <option value="10">10</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "FilterTodo",
  methods: {
    ...mapActions(['filterTodo'])
  }
}
</script>

<style>

</style>