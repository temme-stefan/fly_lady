import {Weekday} from "./Definitions";

export function dayOfWeek(date: Date): Weekday {
    return date.getDay();
}

export function getMonday(d: Date) {
    return new Date(new Date(d).setDate(d.getDate() - ((6 + d.getDay()) % 7)));
}

export function addDays(d: Date, add: number) {
    return new Date(new Date(d).setDate(d.getDate() + add));
}

export function equalDay(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear()
        && d1.getMonth() === d2.getMonth()
        && d1.getDate() === d2.getDate()
}