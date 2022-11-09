// @ts-ignore
import tasksMeta from "./RoutineMeta.csv";
// @ts-ignore
import tasks from "./RoutineTask.csv";

import {
    ImportTask,
    ImportTaskMetaData,
    TaskMetaData,
    TaskType
} from "./Definitions";
import {toReoccurringTasks} from "./Mapper";

const metaLookup: Map<string, TaskMetaData> = new Map(
    (tasksMeta as ImportTaskMetaData[]).map(({key, ...data}) => [key, data])
);

export const RoutineTasks = (tasks as ImportTask[])
    .map((t) => toReoccurringTasks(t, TaskType.Routine, metaLookup))
    .flat();