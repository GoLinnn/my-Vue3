<template>
  <h1>Event For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Previous</router-link
      >
      <router-link
        id="page-next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
// import { watchEffect } from 'vue'
import NProgress from 'nprogress'

export default {
  name: 'EventList',
  props: ['page'],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
    }
  },
  // created() {
  //   watchEffect(() => {
  //     this.events = null
  //     EventService.getEvents(2, this.page)
  //       .then((response) => {
  //         this.events = response.data
  //         this.totalEvents = response.headers['x-total-count']
  //       })
  //       .catch(() => {
  //         // 网络错误
  //         this.$router.push({
  //           name: 'NetworkError',
  //         })
  //       })
  //   })
  // },
  // 导航守卫
  beforeRouteEnter(routeTo, routeFrom, next) {
    NProgress.start()
    EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        // 可以通过传一个回调给 next 来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数
        next((comp) => {
          comp.events = response.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch(() => {
        // 网络错误
        next({ name: 'NetworkError' })
      })
      .finally(() => {
        NProgress.done()
      })
  },
  beforeRouteUpdate(routeTo) {
    NProgress.start()
    EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
      .then((response) => {
        // 可以访问this
        this.events = response.data
        this.totalEvents = response.headers['x-total-count']
      })
      .catch(() => {
        // 网络错误
        // 可以使用next，当没有next时可以直接return，效果一样
        return { name: 'NetworkError' }
      })
      .finally(() => {
        NProgress.done()
      })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2)
      return this.page < totalPages
    },
  },
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
