import axios from 'axios';

export default async function deleteEvent(id: string) {
    try {
        await axios.delete(`https://hotel-template-backend.vercel.app/event/delete/${id}`)
    }
    catch (error) {
        console.log(error);
    }
}