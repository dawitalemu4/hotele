export class HotelEventRoutes {

    static readonly getAllHotelEvents = '/hotelEvents'

    static readonly getHotelEventByID = '/hotelEvent/:id'

    static readonly getHotelEventsByLocation = '/hotelEvents/location/:location'

    static readonly createHotelEvent = '/hotelEvents/create'

    static readonly updateHotelEvent = '/hotelEvent/update/:id'

    static readonly deleteHotelEvent = '/hotelEvent/delete/:id'
    
}