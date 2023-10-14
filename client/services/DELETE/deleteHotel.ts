import axios from 'axios';

export default async function deleteHotel(id: string) {
    try {
        await axios.delete(`http://localhost:5432/hotel/delete/${id}`)
    }
    catch (error) {
        console.log(error);
    }
}