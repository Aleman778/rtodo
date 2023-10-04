<script setup>
import TodoList from './components/TodoList.vue'
</script>

<template>
  <header>
    <h1>Realtime TODO App</h1>
  </header>

  <main>
    <TodoList />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
