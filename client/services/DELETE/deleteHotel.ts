import axios from 'axios';

export default async function deleteHotel(id: string) {
    try {
        await axios.delete(`https://hotel-template-backend.vercel.app/hotel/delete/${id}`)
    }
    catch (error) {
        console.log(error);
    }
}