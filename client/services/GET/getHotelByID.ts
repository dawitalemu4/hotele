import axios from 'axios';

export default async function getHotelByID(id: string) {
    try {
        const hotel = await axios.get(`https://hotel-template-backend.vercel.app/hotel/${id}`)
        return hotel.data;
    } catch (error) {
        console.log(error);
    }
}