function calculateDaysUntilEvent(eventStartDate) {
    const currentDate = new Date();
    const parsedEventStartDate = new Date(eventStartDate);
    const timeDifference = parsedEventStartDate.getTime() - currentDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}
const eventStartDate = "2024-01-01"; 
const daysUntilEvent = calculateDaysUntilEvent(eventStartDate);

console.log(`There are ${daysUntilEvent} days until the event.`);
