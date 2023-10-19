import axios from 'axios';

export default async function getAllHotelEvents() {
    try {
        const allHotels = await axios.get('http://localhost:5432/hotelEvents');
        return allHotels.data;
    }
    catch (error) {
        console.log(error);
    }
}