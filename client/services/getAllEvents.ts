export default async function getAllEvents() {
    const allEvents = await fetch('https://hotel-template-backend.vercel.app/events').then((res) => res.json())
    return allEvents;
}