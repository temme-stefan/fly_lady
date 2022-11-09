// @ts-ignore
import tasksMeta from "./ZoneMeta.csv";
// @ts-ignore
import tasks from "./ZoneTask.csv";

import { ImportTask, ImportTaskMetaData, TaskType, toReoccurringTasks} from "./Definitions";



export enum Zone {
    "Flur",
    "Schlafzimmer",
    "Wohnzimmer",
    "Küche",
    "Bäder"
}

interface ZoneTaskMetaData extends ImportTaskMetaData {
    key: "Flur" | "Schlafzimmer" | "Wohnzimmer" | "Küche" | "Bäder"
}


export const ZoneMeta: Map<Zone, { label: string, description?: string }> = new Map(
    (tasksMeta as ZoneTaskMetaData[]).map(({key, ...data}) => [Zone[key], data])
);

export const zoneCount = Object.keys(Zone).filter(v => isNaN(Number(v))).length;

export const ZoneTasks = (tasks as ImportTask[])
    .map((t) => toReoccurringTasks(t, TaskType.Zone))
    .flat();
