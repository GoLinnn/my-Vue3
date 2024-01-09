import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  // 方法要放到actions中
  actions: {
    increaseCount() {
      this.count++
    },
    decreaseCount() {
      this.count--
    }
  },
  // 当数据改变时才会渲染更新页面，相当于computed
  getters: {
    oddOreven() {
      // 此处count不用value
      if (this.count % 2 === 0) return 'even'
      else return 'odd'
    }
  }
})
