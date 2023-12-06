<template>
  <h1>Event For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    axios
      .get('https://my-json-server.typicode.com/GoLinnn/my-Vue3/events')
      .then(res => {
        this.events = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
