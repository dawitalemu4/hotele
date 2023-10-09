export class EventRoutes {
    static readonly getAllEvents = '/events'

    static readonly getEventByID = '/events/:id'

    static readonly getEventByLocation = '/events/:location'

    static readonly createEvent = '/events/create'

    static readonly updateEvent = '/events/update/:id'

    static readonly deleteEvent = '/events/delete/:id'
}