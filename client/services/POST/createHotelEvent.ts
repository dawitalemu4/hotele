import axios from 'axios';
import { HotelEvent } from '../types';

export default async function createHotelEvent(newHotelEvent: HotelEvent) {
    try {
        await axios.post(`http://localhost:5432/hotelEvents/create`, newHotelEvent);
    }
    catch (error) {
        console.log(error);
    }
}