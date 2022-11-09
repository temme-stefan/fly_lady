import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";

export interface ReoccurringTask {
    user: User,
    dayOfWeek: Weekday,
    week: WeekFrequenz,
    type: TaskType,
    label?: string,
    description?: string,
    sort?: number,
}

export interface ImportTaskMetaData {
    key: string,
    label: string,
    description?: string,
    sort?: number,
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

