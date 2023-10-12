import axios from 'axios';

export default async function checkCredentials(username: string, password: string) {
    try {
        const invalid = { "error": "Invalid Credentials." };
        const getCreds = await axios.get(`https://hotel-template-backend.vercel.app/admin/${username}/${password}`);
        if (getCreds.data != invalid) {
            return getCreds.data;
        }
        else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}