import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";

export interface ReoccurringTask {
    user: User,
    dayOfWeek: Weekday,
    week: WeekFrequenz,
    type: TaskType,
    label?: string
}


export enum TaskType {
    Routine,
    Fokus,
    Zone
}