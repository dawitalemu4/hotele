import axios from 'axios';

export default async function getAllHotels() {
    try {
        const allHotels = await axios.get('http://localhost:5432/hotels');
        return allHotels.data;
    }
    catch (error) {
        console.log(error);
    }
}