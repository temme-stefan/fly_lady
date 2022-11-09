import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";
import {parseWeekday} from "../tools/Weekdays";

export interface ReoccurringTask {
    user: User,
    dayOfWeek: Weekday,
    week: WeekFrequenz,
    type: TaskType,
    label?: string,
    description?: string
}

export interface ImportTaskMetaData {
    key: string,
    label: string,
    description?: string
}


export type DayStrings = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
export type DayStringList = "Daily" | string;

export interface ImportTask {
    key: string,
    user: "Sysy" | "Nappo",
    dayOfWeek: DayStringList,
    weekFrequenz: "Even" | "Odd" | "Every"
}

export interface TaskMetaData {
    label: string,
    description?: string
}

export enum TaskType {
    Routine,
    Fokus,
    Zone
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