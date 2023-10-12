import axios from 'axios';

export default async function getAllLocations() {
    try {
        const allLocations = await axios.get('https://hotel-template-backend.vercel.app/hotels');
        return allLocations.data;
    }
    catch (error) {
        console.log(error);
    }
}