<template>
    <div class="counter">
        {{ storeCounter.count }}
    </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const storeCounter = useCounterStore()
</script>

<style>
.counter {
    font-size: 60px;
    margin: 20px;
}
</style>