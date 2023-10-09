export class HotelRoutes {
    static readonly getAllHotels = '/hotels'

    static readonly getHotelByID = '/hotels/:id'

    static readonly getHotelByLocation = '/hotels/:location'

    static readonly createHotel = '/hotels/create'

    static readonly updateHotel = '/hotels/update/:id'

    static readonly deleteHotel = '/hotels/delete/:id'
}