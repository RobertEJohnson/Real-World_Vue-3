Client-Side Routing and Server-Side Routing

Server-side Routing:
    Traditionally a user types in a URL, 
    The browser requests a URL from the server,
    The Server returns the page

    If the User clicks on a link,
    Browser requests a url from server,
    The server returns a page.

    ```The Browser refreshes on EVERY page load```

Client-Side Routing:
    The user types in a URL,
    The browser requests that url from the server,
    The server returns that page but ALSO
        ```it sends along with it the rest of the app```
    Now Vue will ```compare the two apps``` and render the differences
        There no longer is a browser refresh.

--

Within Vue Router
   1. We import vue-router essentials
        import { createRouter, createWebHistory } from 'vue-router'

    2. Create a routes array with route objects
        Each route has.
           1. Path
           2. Name
           3. Component to render upon path load
   
        const routes = [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                import(/* webpackChunkName: "about" */ '../views/About.vue')
            }
        ]

   3. Create the router with createRouter({cofiguration object})
      1. include the routes array (containing objects for routes)
   
        const router = createRouter({
            history: createWebHistory(process.env.BASE_URL),
            routes
        })

    4. Export the router for use and import in main.js in the createApp()
        export default router


    Make sure to import the routes before referencing them in the route objects!
-- 