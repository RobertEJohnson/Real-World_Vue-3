<template>


  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>

      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input v-model="event.title" type="text" placeholder="Add an event title"/>
      </div>

      <div class="field">
        <label>Description</label>
        <input v-model="event.description" type="text" placeholder="Add a description"/>
      </div>

      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input v-model="event.location" type="text" placeholder="Add a location"/>
      </div>

      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date"/>
      </div>
			
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit"/>
    </form>
  </div>




  <!-- <p>Current count of state: {{ count }}</p> -->
  <!-- v-model.number will typecast all inputs as a number
  <input type="number" v-model.number="incrementBy">
  <button @click="incrementCount">Increase Count State</button>

  <h1>Create Event, {{ user.name }}</h1>
  <p>This event was created by {{ user.name}} </p>
  
  
  <p>{{ getEventById(2) }}</p>
  <p>The length of Categories is {{ catLength }}</p>
  <ul>
    <li v-for="cat in categories" :key="cat">{{ cat }}</li>
  </ul>

  <p>There are {{ doneTodos.length }} done todos.</p>
  <p>There are {{ activeTodosCount }} todos left to complete.</p>
  <ul>
    <li v-for="todo in todos" :key="todo">{{ todo }}</li>
  </ul>

  <p>There are {{events.length}} events!</p>
  <ul>
    <li v-for="event in events" :key="event">{{ event }}</li>
  </ul>

  <p>There is 1 event that has the id of 1</p>
  <ul>
    <li>{{getEventById(1)}}</li>
  </ul> -->


</template>

<script>
  import Datepicker from 'vue3-datepicker'
  // import { mapState, mapGetters } from 'vuex'
  
  export default {
    components: {
      Datepicker
    },
    data(){
			const times = []
			for (let i = 1; i<=24; i++){
				times.push(i + ':00')
			}
      return {
        incrementBy: 1,
				times,
				categories: this.$store.state.categories,
				event: this.createFreshEventObject()
      }
    },

    // FIRST KNOWN WAY FOR COMPUTED VALUES!

    // computed: {
    // 	username() {
    // 		return this.$store.state.user.name
    // 	},
    // 	userID(){
    // 		return this.$store.state.user.id
    // 	},
    // }

    // USING MAPSTATE({}) to reduce functions!

    // computed: mapState({
    // 	username: state => state.user.name,
    // 	userID: state => state.user.id,
    // 	categories: state => state.categories
    // })

    // Using mapstate({}) with abbreviations for state => state.user etc, the abbreviations accessing top level values.

    // computed: mapState({
    // 	user: 'user',
    // 	categories: 'categories'
    // })

    // we can also Name our mapState like user and categories, or not like mapState(['user', 'categories']) this will do the same
    // mapState(['user','categories'])

    //What if we wanted to have additional computed properties and not just the mapState object
    //computed: mapState({
      //this takes up the whole computed property!
    //})

    //We can get around computed getting taken up by mapState({}) by spreading mapState!
    // computed: {
      // localComputation() {
        //return someValue;
    //	},
    // ...mapState(['user', 'categories'])
    //}

    computed: {
      // catLength(){
      //   //Heres one way to access a value, but its only going to work within this component's computed property,
        
      //     //return this.$store.categories.length

      //   //if we wanted to access this value from anywhere in the application we could use a getter
      //       return this.$store.getters.catLength
      // },
      // ...mapState(['user', 'categories', 'todos', 'events', 'count']),
      // ...mapGetters(['doneTodos', 'catLength', 'activeTodosCount', 'getEventById'])
    },
    methods: {
      // incrementCount(){
      //   //Way to do it with only accessing a mutator, this isn't recommended
      //   //this.$store.commit('INCREMENT_COUNT', this.incrementBy)

      //   //How to use actions to dispatch mutations
      //   this.$store.dispatch('updateCount', this.incrementBy)
      // },
			createFreshEventObject(){
				const user = this.$store.state.user
				const id = Math.floor(Math.random() * 10000000)

				let eventObj = {
					id: id,
					user: user,
					category: '',
					organizer: user,
					title: '',
					description: '',
					location: '',
					date: new Date,
					time: '',
					attendees: []
				}
				
				console.log(`Created new Event ${JSON.stringify(eventObj)}`)
				return eventObj
				
			},
			createEvent(){
				console.log('calling the store dispatch for the action "createEvent"')
				this.$store.dispatch('createEvent', this.event)
					.then(()=> {
						//after store event is dispatched if no error change views to new
						this.$router.push({
							name: 'EventDetails',
							params: {
								id: this.event.id
							}
						})
						//clear out event object
						this.event = this.createFreshEventObject()
					})
					.catch(()=>{
						console.log('There was a problem creating your event');
					})
			}
    }
  }
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>