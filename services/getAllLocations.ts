export default async function getAllLocations() {
    const allLocations = await fetch('http://localhost:4001/hotels').then((res) => res.json())
    return allLocations;
}