To we can access route props by accessing the route object properties of our router index.js
    Then add a property for props and set it to true.

    const routes = [
    {
        path: '/',
        name: 'EventList',
        component: EventList
    },
    {
        path: '/event/:id',
        name: 'EventDetails',
        
        ```//This allows us to send in route params as component props```
        props: true,
        component: EventDetails
    },

In the actual component