export default async function getAllLocations() {
    const allLocations = await fetch('https://hotel-template-backend.vercel.app/hotels').then((res) => res.json())
    return allLocations;
}