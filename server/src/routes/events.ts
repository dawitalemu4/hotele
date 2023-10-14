export class EventRoutes {

    static readonly getAllEvents = '/events'

    static readonly getEventByID = '/event/:id'

    static readonly getEventsByLocation = '/events/location/:location'

    static readonly createEvent = '/events/create'

    static readonly updateEvent = '/event/update/:id'

    static readonly deleteEvent = '/event/delete/:id'
    
}