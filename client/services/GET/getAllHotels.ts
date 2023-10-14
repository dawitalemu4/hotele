import axios from 'axios';

export default async function getAllHotels() {
    try {
        const allHotels = await axios.get('https://hotel-template-backend.vercel.app/hotels');
        return allHotels.data;
    }
    catch (error) {
        console.log(error);
    }
}