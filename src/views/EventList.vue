<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'EventList',
  //register EventCard as a child component of EventList
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
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
