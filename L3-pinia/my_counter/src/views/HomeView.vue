<template>
  <h3>Home</h3>
  <div class="counter">
    {{ count }}
  </div>
  <div class="buttons">
    <button @click="decreaseCount">-</button>
    <button @click="increaseCount">+</button>
  </div>
  <hr>
  <div>
    The number is {{ oddOreven }}
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)

const increaseCount = () => {
  // 在 JavaScript 中需要 .value
  count.value++
}
const decreaseCount = () => {
  // 在 JavaScript 中需要 .value
  count.value--
}
const oddOreven = computed(() => {
  if (count.value % 2 === 0) return 'even'
  else return 'odd'
})
</script>
<style>
.counter {
  font-size: 60px;
  margin: 20px;
}

.buttons button {
  font-size: 40px;
  margin: 20px
}
</style>
