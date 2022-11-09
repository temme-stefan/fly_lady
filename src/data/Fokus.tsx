// @ts-ignore
import tasksMeta from "./FokusMeta.csv";
// @ts-ignore
import tasks from "./FokusTask.csv";

import {
    ImportTask,
    ImportTaskMetaData,
    TaskMetaData,
    TaskType
} from "./Definitions";
import {toReoccurringTasks} from "./Mapper";

export const FocusMeta: Map<string, TaskMetaData> = new Map(
    (tasksMeta as ImportTaskMetaData[]).map(({key, ...data}) => [key, data])
);


export const FokusTasks = (tasks as ImportTask[])
    .map((t) => toReoccurringTasks(t, TaskType.Fokus, FocusMeta))
    .flat();

