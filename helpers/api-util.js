//always loading allEvents first from firebase, but code is simplified for demo
export async function getAllEvents() {
    const response = await fetch(
        "https://nextjs-course-11ad3-default-rtdb.firebaseio.com/events.json"
    );
    const data = await response.json();
    //skipping error handling

    const events = [];
    for (const key in data) {
        events.push({
            id: key,
            ...data[key],
        });
    }
    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
}
