import axios from 'axios';

export default async function getEventByID(id: string) {
    try {
        const event = await axios.get(`http://localhost:5432/event/${id}`);
        return event.data;
    }
    catch (error) {
        console.log(error);
    }
}