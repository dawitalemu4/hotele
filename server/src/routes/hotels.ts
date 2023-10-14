export class HotelRoutes {

    static readonly getAllHotels = '/hotels'

    static readonly getHotelByID = '/hotel/:id'

    static readonly getHotelsByLocation = '/hotels/location/:location'

    static readonly createHotel = '/hotels/create'

    static readonly updateHotel = '/hotel/update/:id'

    static readonly deleteHotel = '/hotel/delete/:id'
    
}