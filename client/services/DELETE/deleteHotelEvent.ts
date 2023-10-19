import axios from 'axios';

export default async function deleteHotelEvent(id: string) {
    try {
        await axios.delete(`http://localhost:5432/hotelEvent/delete/${id}`)
    }
    catch (error) {
        console.log(error);
    }
}