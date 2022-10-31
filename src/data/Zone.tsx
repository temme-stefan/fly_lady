import {ReoccurringTask, TaskType} from "./Definitions";
import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";

export enum Zone {
    "Flur",
    "Küche",
    "Wohnzimmer",
    "Schlafzimmer",
    "Bäder"
}

export const zoneData: Map<Zone, { label: string, description?: string }> = new Map([
    [Zone.Flur, {label: "Flur & Treppenhaus & Arbeitszimmer"}],
    [Zone.Küche, {label: "Küche"}],
    [Zone.Wohnzimmer, {label: "Wohnzimmer"}],
    [Zone.Schlafzimmer, {label: "Kinderzimmer & Schlafzimmer"}],
    [Zone.Bäder, {label: "Bad & Duschbad"}]
])

export const zoneCount = Object.keys(Zone).filter(v => isNaN(Number(v))).length;

export const ZoneTasks: ReoccurringTask[] = [
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Monday,
        week: WeekFrequenz.Every,
        type: TaskType.Zone
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Wednesday,
        week: WeekFrequenz.Every,
        type: TaskType.Zone
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Tuesday,
        week: WeekFrequenz.Every,
        type: TaskType.Zone
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Thursday,
        week: WeekFrequenz.Every,
        type: TaskType.Zone
    },
]