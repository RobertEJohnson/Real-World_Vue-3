/* eslint-disable */
import { createStore } from 'vuex'
import EventService from '../services/EventService'

export default createStore({
  state: {
		count: 0,
		user: { id: 'abc123', name: 'Adam Jahr'},
		categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
		todos: [
			{ id: 1, text: '...', done: true },
			{ id: 2, text: '...', done: false },
			{ id: 3, text: '...', done: true },
			{ id: 4, text: '...', done: false }
		],
		events: [
			{ id: 1, title: '...', organizer: '...' },
			{ id: 2, title: '...', organizer: '...' },
			{ id: 3, title: '...', organizer: '...' },
			{ id: 4, title: '...', organizer: '...' },
		],
		totalEvents: 0,
		perPage: 3
	},
  mutations: {
		INCREMENT_COUNT(state, value){
			state.count += value
		},
		ADD_EVENT(state, event){
			console.log('in ADD_EVENT mutation, pushing event to Vuex State');
			state.events.push(event)
		},
		SET_EVENTS(state, events){
			state.events = events
		},
		SET_TOTAL_EVENTS(state, total){
			state.totalEvents = total
		}
	},
  actions: {
		// Note the destructuring of the context object
		// The context object holds the entire store,
		// so we are getting state and commit from it
		updateCount({ state, commit }, value){
			if(state.user) {
				commit('INCREMENT_COUNTER', value)
			}
		},
		createEvent({ commit }, event){
			console.log('in createEvent action, posting event with EventService')

			return EventService.postEvent(event)
				.then((response)=>{
					console.log('received response:', response);

					console.log('in createEvent action, running commit("ADD_EVENT", event)')
					commit('ADD_EVENT', event)
				})
				.catch((err)=>{
					console.log('There was a problem posting your event:', err);
				})
		},
		fetchEvents({commit}, { perPage, page}){
			EventService.getEvents(perPage, page)
      .then(response => {
				console.log('Total events are ' + response.headers['x-total-count'])
				this.commit('SET_TOTAL_EVENTS', response.headers['x-total-count'])
        this.commit('SET_EVENTS', response.data)
      })
      .catch(error => {
        console.log(error)
      })
		}
	},
  modules: {},
	getters: {
		catLength: state => {
			return state.categories.length
		},
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		// here is an example of passing a getter to a getter, just pass the entire getters object as a parameter!
		activeTodosCount: (state, getters) => {
			return state.todos.length - getters.doneTodos.length

			//Or we could do this, if we didnt pass in the getters parameter
			// return state.todos.filter(todo => !todo.done).length
		},
		getEventById: state => id => {
			return state.events.find(event => event.id === id)
		}
		// The above is the same as
	
		// getEventsById: function (state) {
		// 	return function (id) {
		// 		return state.events.find(event => event.id === id)
		// 	}
		//}
	}
})
