export default async function getAllEvents() {
    const allEvents = await fetch('http://localhost:4001/events').then((res) => res.json())
    return allEvents;
}