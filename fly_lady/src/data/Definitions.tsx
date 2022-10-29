import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";
import {Routine} from "./Routine";

export interface ReoccurringTask {
    user: User,
    dayOfWeek: Weekday,
    week: WeekFrequenz,
    type: TaskType
}

export interface RoutineTask extends ReoccurringTask {
    routineType: Routine;
}

export function isRoutineTask(task: ReoccurringTask): task is RoutineTask {
    return (task).hasOwnProperty("routineType");
}

export enum TaskType {
    Routine,
    Blessing,
    Zone
}