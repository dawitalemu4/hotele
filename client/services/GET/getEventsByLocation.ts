import axios from 'axios';

export default async function getEventsByLocation(location: string) {
    try {
        const events = await axios.get(`https://hotel-template-backend.vercel.app/events/location/${location}`);
        return events.data;
    }
    catch (error) {
        console.log(error);
    }
}