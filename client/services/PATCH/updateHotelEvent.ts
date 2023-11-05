import axios from 'axios';
import { HotelEvent } from '../types';

export default async function updateHotelEvent(updatedHotelEvent: HotelEvent, id: string) {
    try {
        await axios.put(`https://hotel-template-backend.vercel.app/hotelEvent/update/${id}`, updatedHotelEvent)
    } catch (error) {
        console.log(error);
    }
}