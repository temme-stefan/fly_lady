// @ts-ignore
import tasksMeta from "./FokusMeta.csv";
// @ts-ignore
import tasks from "./FokusTask.csv";

import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";
import {ImportTask, ImportTaskMetaData, ReoccurringTask, TaskMetaData, TaskType} from "./Definitions";

export const FocusMeta: Map<string, TaskMetaData> = new Map(
    (tasksMeta as ImportTaskMetaData[]).map(({key, ...data}) => [key, data])
);

export const FokusTasks: ReoccurringTask[] = (tasks as ImportTask[]).map(({key, user, dayOfWeek, weekFrequenz}) => {
    return {
        ...FocusMeta.get(key),
        user: User[user],
        dayOfWeek: Weekday[dayOfWeek],
        week: WeekFrequenz[weekFrequenz],
        type: TaskType.Fokus
    }
})

