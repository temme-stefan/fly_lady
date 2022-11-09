import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";
import {DayStringList, DayStrings, ImportTask, ReoccurringTask, TaskMetaData, TaskType} from "./Definitions";

export function parseWeekday(toParse: DayStringList): Weekday[] {
    if (toParse !== "Daily") {
        return (toParse.split(',') as DayStrings[]).map(d => Weekday[d]);
    }
    return [Weekday.Sunday,
        Weekday.Monday,
        Weekday.Tuesday,
        Weekday.Wednesday,
        Weekday.Thursday,
        Weekday.Friday,
        Weekday.Saturday];
}

export function toReoccurringTasks(t: ImportTask, type: TaskType, lookup: Map<string, TaskMetaData> = new Map()): ReoccurringTask[] {
    const {key, user, dayOfWeek, weekFrequenz} = t;
    return parseWeekday(dayOfWeek).map(day => {
            return {
                ...lookup.get(key),
                user: User[user],
                dayOfWeek: day,
                week: WeekFrequenz[weekFrequenz],
                type
            }
        }
    );
}