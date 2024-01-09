<template>
  <h3>Home</h3>
  <Counter></Counter>
  <div class="buttons">
    <button @click="storeCounter.decreaseCount">-</button>
    <button @click="storeCounter.increaseCount">+</button>
  </div>
  <hr>
  <div>
    The number is {{ storeCounter.oddOreven }}
  </div>
</template>
<script setup>
import Counter from '@/components/Counter.vue'
import { useCounterStore } from '@/stores/counter'
const storeCounter = useCounterStore()
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
