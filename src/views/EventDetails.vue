<template>
    <div v-if="event">
        <h1>{{event.title}}</h1>
        <p>{{event.time}} on {{event.date}} @ {{event.location}}</p>
        <p>{{event.description}}</p>
    </div>
</template>

<script>
    import EventService from '@/services/EventService.js'

    export default {
        //this will be the route props
        props: ['id'],
        data(){
            return {
                event: null,
            }
        },
        //lifecyle method on component creation to do an api call
        created(){
            //fetch event data with id of event from mock database
            EventService.getEvent(this.id)
                .then(response => {
                    this.event = response.data
                })
                .catch(error => {
                    console.log(error)
                })
            }
    }
</script>    