export default async function getLocationByID(id: string) {
    const location = await fetch(`http://localhost:4001/hotel/${id}`).then((res) => res.json())
    return location;
} 