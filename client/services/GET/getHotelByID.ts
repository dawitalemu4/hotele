import axios from 'axios';

export default async function getHotelByID(id: string) {
    try {
        const hotel = await axios.get(`http://localhost:5432/hotel/${id}`)
        return hotel.data;
    }
    catch (error) {
        console.log(error);
    }
}