import axios from 'axios';
import { Event } from '../types';

export default async function updateEvent(updatedEvent: Event, id: string) {
    try {
        await axios.put(`https://hotel-template-backend.vercel.app/event/update/${id}`, updatedEvent)
    } catch (error) {
        console.log(error);
    }
}