 <script setup>
import { ref } from "vue";
import { TodoItemService } from "@/services/TodoItemService";

const props = defineProps(['item'])

const $inputDone = ref(null);
function updateDone() {
    props.item.done = $inputDone.value.checked;
    TodoItemService.update(props.item);
}

const $inputText = ref(null);
function updateText() {
    const newText = $inputText.value.value;
    if (newText === "") {
        TodoItemService.delete(props.item);
    } else {
        props.item.text = newText;
        TodoItemService.update(props.item);
    }
} 
</script>

<template>
  <input ref="$inputDone" type="checkbox" :checked="item.done" @change="updateDone">
  <input ref="$inputText" class="todoItem-text" type="text" :value="item.text" @change="updateText">
</template>

<style>
.todoItem-text {
  margin-left: 6px;
}
</style>
