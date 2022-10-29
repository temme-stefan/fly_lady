import {Weekday} from "./Definitions";

export function dayOfWeek(date: Date):Weekday{
    return date.getDay();
}
