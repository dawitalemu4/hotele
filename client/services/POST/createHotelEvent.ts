import axios from 'axios';
import { HotelEvent } from '../types';

export default async function createHotelEvent(newHotelEvent: HotelEvent) {
    try {
        await axios.post(`https://hotel-template-backend.vercel.app/hotelEvents/create`, newHotelEvent);
    }
    catch (error) {
        console.log(error);
    }
}