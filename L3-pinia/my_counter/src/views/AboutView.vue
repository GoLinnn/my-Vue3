<template>
  <h3>About</h3>
  <Counter></Counter>
  <button @click="storeCounter.increaseCount">+</button>
</template>
<script setup>
// 导入组件
import Counter from '@/components/Counter.vue'
import { useCounterStore } from '@/stores/counter'
const storeCounter = useCounterStore()
</script>
<style>
.counter {
  font-size: 60px;
  margin: 20px;
}

button {
  font-size: 40px;
  margin: 20px
}
</style>


