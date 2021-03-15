import axios from 'axios';

//create Axios single instance of our app
const apiClient = axios.create({
    //baseUrl for all calls to use
    baseURL: 'https://my-json-server.typicode.com/robertejohnson/my-json-server',
    withCredentials: false,
    headers: {
        //authentication and configuration
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(){
        return apiClient.get('/events');
    }
}