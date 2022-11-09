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


export type ImportDayStrings = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
export type ImportDayStringList = "Daily" | string;

export type ImportUsers = "Sysy" | "Nappo" |"Home";

export interface ImportTask {
    key: string,
    user: ImportUsers,
    dayOfWeek: ImportDayStringList,
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

