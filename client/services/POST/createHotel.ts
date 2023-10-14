import axios from 'axios';
import { Hotel } from '../types';

export default async function createHotel(newHotel: Hotel) {
    try {
        await axios.post(`http://localhost:5432/hotels/create`, newHotel);
    }
    catch (error) {
        console.log(error);
    }
}