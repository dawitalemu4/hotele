import axios from 'axios';
import { HotelEvent } from '../types';

export default async function updateHotelEvent(updatedHotelEvent: HotelEvent, id: string) {
    try {
        await axios.put(`http://localhost:5432/hotelEvent/update/${id}`, updatedHotelEvent)
    }
    catch (error) {
        console.log(error);
    }
}