export default async function getLocationByID(id: string) {
    const location = await fetch(`https://hotel-template-backend.vercel.app/hotel/${id}`).then((res) => res.json())
    return location;
} 