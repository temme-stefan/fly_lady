import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";

export interface ReoccurringTask {
    user: User,
    dayOfWeek: Weekday,
    week: WeekFrequenz,
    type: TaskType,
    label?: string,
    description?:string
}
export interface ImportTaskMetaData{
    key:string,
    label: string,
    description?:string
}

export interface ImportTask{
    key:string,
    user: "Sysy"|"Nappo",
    dayOfWeek:"Sunday"|"Monday"|"Tuesday"|"Wednesday"|"Thursday"|"Friday"|"Saturday",
    weekFrequenz:"Even"|"Odd"|"Every"
}

export interface TaskMetaData {
    label: string,
    description?:string
}


export enum TaskType {
    Routine,
    Fokus,
    Zone
}