export default async function getEventByLocation(location: string) {
    const event = await fetch(`https://hotel-template-backend.vercel.app/event/${location}`).then((res) => res.json())
    return event;
} 