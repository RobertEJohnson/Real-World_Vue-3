import { createRouter, createWebHistory } from 'vue-router';
import EventList from '../views/EventList.vue';
import About from '../views/About.vue';

//routes array with two objects
//    each have a url, name, and a component to load with the route
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
