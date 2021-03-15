Why axios:

Get Post Put and Delete requests,
Authentication for each request,
Set Timeouts,
Configure defaults for every request,
intercept requests to make middleware,
Handle errors and cancel requests properly,
Properly Serialize and deserialize requests and responses.

--
Components have LifeCycle hooks!!! Woo!

Such as
    - beforeCreate
    - created                Creation Hooks
    - beforeMount
    - mounted                Mount Hooks
    - beforeUpdate
    - updated                Update Hooks
    - beforeUnmount      
    - unmounted              UnMount Hooks
    - errorCaptured          Error/Render hooks
    - renderTracked
    - renderTriggered

We will use created() to make a axios.get() request with a .then() and .catch()

-- 
In order to not import axios or any HTTP request related entity multiple times (in each component) we will make a service worker
