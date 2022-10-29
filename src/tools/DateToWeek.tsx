const divisor = 1000 * 60 * 60 * 24 * 7; //ms * sec * min * h * day
const offset = 4 * 24 * 60 * 60 * 1000; //compare to Monday Jan 05 1970 00:00:00

export function dateToWeek(date: Date): number {
    const comp = new Date(new Date(date).setHours(0, 0, 0));
    return Math.floor((comp.getTime() + offset) / divisor);
}

