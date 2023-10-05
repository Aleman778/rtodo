 <script setup>
import { ref } from "vue";
import { TodoItemService } from "@/services/TodoItemService";

const props = defineProps(['item'])

const $inputDone = ref(null);

function updateDone(a, b) {
    console.log("updateDone", a, b);
    console.log(props.item);
    console.log($inputDone.value.checked);
    props.item.done = $inputDone.value.checked;
    TodoItemService.update(props.item);
}
</script>

<template>
  <input ref="$inputDone" type="checkbox" :checked="item.done" @change="updateDone">
  <input class="todoItem-text" type="text" :value="item.text">
</template>

<style>

.todoItem-text {
  margin-left: 6px;
}
</style>
