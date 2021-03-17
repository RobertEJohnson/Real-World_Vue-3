import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
	postEvent(event){
		console.log(`in postEvent EventService, posting events to /events with event: ${JSON.stringify(event)}`);
		return apiClient.post('/events', event)
	}
}
