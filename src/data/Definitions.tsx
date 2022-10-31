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

export interface TaskMetaData {
    label: string,
    description?:string
}


export enum TaskType {
    Routine,
    Fokus,
    Zone
}