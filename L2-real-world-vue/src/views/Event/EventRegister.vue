<template>
  <p>Register the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'], // 注入GStore
  methods: {
    register() {
      // 成功登录信息
      this.GStore.flashMessage =
        'You are successfully registered for' + this.event.title
      // 3s后清除提示信息
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)
      // 编程式导航
      // 退回到之前的EventDetails页面，由于EventDetails和EventLayout是nested router关系，所以不用传递新的参数id
      this.$router.push({
        name: 'EventDetails',
      })

      // 替换当前页面
      // this.$router.replace({
      //   name: 'EventDetails',
      // })

      // 下一个页面
      //this.$router.go(1)
      // 上一个页面
      //this.$router.go(-1)
    },
  },
}
</script>

<style></style>
