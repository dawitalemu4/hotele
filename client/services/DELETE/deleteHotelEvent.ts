import axios from 'axios';

export default async function deleteHotelEvent(id: string) {
    try {
        await axios.delete(`https://hotel-template-backend.vercel.app/hotelEvent/delete/${id}`)
    } catch (error) {
        console.log(error);
    }
}