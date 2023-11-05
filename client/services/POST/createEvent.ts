import axios from 'axios';
import { Event } from '../types';

export default async function createEvent(newEvent: Event) {
    try {
        await axios.post('https://hotel-template-backend.vercel.app/events/create', newEvent);
    } catch (error) {
        console.log(error);
    }
}