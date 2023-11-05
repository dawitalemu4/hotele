import axios from 'axios';

export default async function getEventByID(id: string) {
    try {
        const event = await axios.get(`https://hotel-template-backend.vercel.app/event/${id}`);
        return event.data;
    } catch (error) {
        console.log(error);
    }
}