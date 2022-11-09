// @ts-ignore
import tasksMeta from "./RoutineMeta.csv";
// @ts-ignore
import tasks from "./RoutineTask.csv";

import {ImportTask, ImportTaskMetaData, ReoccurringTask, TaskMetaData, TaskType} from "./Definitions";
import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";

const metaLookup: Map<string,TaskMetaData> =new Map(
    (tasksMeta as ImportTaskMetaData[]).map(({key, ...data}) => [key, data])
);


export const RoutineTasks: ReoccurringTask[] = (tasks as ImportTask[]).map(({key, user, dayOfWeek, weekFrequenz}) => {
    return {
        ...metaLookup.get(key),
        user: User[user],
        dayOfWeek: Weekday[dayOfWeek],
        week: WeekFrequenz[weekFrequenz],
        type: TaskType.Routine
    }
})