<script setup>
const props = defineProps(['item'])

console.log(props.item);
</script>

<template>
  <input type="checkbox" :checked="item.done">
  <input type="text" :value="item.text">
  
</template>