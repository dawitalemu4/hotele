import axios from 'axios';

export default async function getAllHotelEvents() {
    try {
        const allHotels = await axios.get('https://hotel-template-backend.vercel.app/hotelEvents');
        return allHotels.data;
    } catch (error) {
        console.log(error);
    }
}