<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
		<div class="prev-next">
			<router-link 
				v-if="page != 1"
				:to="{ name: 'EventList', query: {page: page - 1}}" 
				rel="prev"
				style="margin-right: 20px"
			>
				Previous Page
			</router-link>
	
			<router-link 
				v-if="page * perPage < totalEvents"
				:to="{ name: 'EventList', query: {page: page + 1}}" 
				rel="next"
			>
				Next Page
			</router-link>
		</div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import {mapState} from 'vuex'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents', {
			perPage: this.perPage,
			page: this.page
		})
  },
	computed: {
		page(){
			return parseInt(this.$route.query.page) || 1
		},
		...mapState(['events', 'totalEvents', 'perPage'])
	}
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.prev-next {
	display: flex;
	flex-direction: row;
}
</style>
