import axios from 'axios';

export default async function getLocationByID(id: string) {
    try {
        const location = await axios.get(`https://hotel-template-backend.vercel.app/hotel/${id}`)
        return location.data;
    }
    catch (error) {
        console.log(error);
    }
}