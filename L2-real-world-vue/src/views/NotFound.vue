<template>
  <h1>Oops!</h1>
  <!-- {{ 内容 }}： -->
  <!-- 默认：用户路径错误 page -->
  <!-- 用户申请的event不存在 event -->
  <h3>The {{ resource }} you're looking for is not here</h3>
  <router-link :to="{ name: 'EventList' }">Back to the home page</router-link>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page',
    },
  },
}
</script>
