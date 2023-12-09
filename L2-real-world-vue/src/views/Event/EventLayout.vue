<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div class="nav"></div>
    <router-link :to="{ name: 'EventDetails', params: { id } }"
      >Details</router-link
    >
    <router-link :to="{ name: 'EventRegister', params: { id } }"
      >Register</router-link
    >
    <router-link :to="{ name: 'EventEdit', params: { id } }">Edit</router-link>
  </div>
  <router-view :event="event" />
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
  props: ['id'],
  data() {
    return {
      event: null,
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((res) => {
        this.event = res.data
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          // 申请资源不存在，将event传递给相应的route，返回对应的错误页面
          this.$router.push({
            name: '404Resource',
            params: { resource: 'event' },
          })
        } else {
          // 网络错误
          this.$router.push({
            name: 'NetworkError',
          })
        }
      })
  },
}
</script>

<style></style>
