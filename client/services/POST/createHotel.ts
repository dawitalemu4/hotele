import axios from 'axios';
import { Hotel } from '../props';

export default async function createHotel(newHotel: Hotel) {
    try {
        await axios.post('https://hotel-template-backend.vercel.app/hotels', newHotel)
    }
    catch (error) {
        console.log(error);
    }
}