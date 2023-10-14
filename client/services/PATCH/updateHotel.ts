import axios from 'axios';
import { Hotel } from '../types';

export default async function updateHotel(updatedHotel: Hotel, id: string) {
    try {
        console.log(updatedHotel, id);
        await axios.patch(`http://localhost:5432/hotel/update/${id}`, updatedHotel)
    }
    catch (error) {
        console.log(error);
    }
}