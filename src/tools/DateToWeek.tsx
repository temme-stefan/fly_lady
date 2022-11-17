const divisor = 1000 * 60 * 60 * 24 * 7; //ms * sec * min * h * day
const offset = 3 * 24 * 60 * 60 * 1000; //compare to Monday Jan 05 1970 00:00:00

export function toLocalIsoString(date: Date) {
    const m = date.getMonth() + 1;
    const month = (m < 10 ? "0" : "") + m;
    const d = date.getDate();
    const day = (d < 10 ? "0" : "") + d;
    return `${date.getFullYear()}-${month}-${day}`;
}

export function dateToWeek(date: Date): number {
    const comp = new Date(toLocalIsoString(date));
    return Math.floor((comp.getTime() + offset) / divisor);
}

