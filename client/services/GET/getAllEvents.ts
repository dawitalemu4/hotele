import axios from 'axios';

export default async function getAllEvents() {
    try {
        const allEvents = await axios.get('https://hotel-template-backend.vercel.app/events');
        return allEvents.data;
    } catch (error) {
        console.log(error);
    }
}