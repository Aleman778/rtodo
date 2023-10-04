<script setup>
const props = defineProps(['item'])
</script>

<template>
  <input type="checkbox" :checked="item.done">
  <input class="todoItem-text" type="text" :value="item.text">
</template>

<style>

.todoItem-text {
  margin-left: 6px;
}
</style>