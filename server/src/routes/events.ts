export class EventRoutes {

    static readonly getAllEvents = '/events'

    static readonly getEventByID = '/event/:id'

    static readonly getEventsByLocation = '/events/location/:location'

    static readonly createEvent = '/events/create/:newEvent'

    static readonly updateEvent = '/event/update/:data'

    static readonly deleteEvent = '/event/delete/:id'
    
}