import axios from 'axios';
import { Hotel } from '../types';

export default async function updateHotel(updatedHotel: Hotel, id: string) {
    try {
        await axios.put(`https://hotel-template-backend.vercel.app/hotel/update/${id}`, updatedHotel)
    } catch (error) {
        console.log(error);
    }
}