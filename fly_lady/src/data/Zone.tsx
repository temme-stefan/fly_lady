import {ReoccurringTask, TaskType} from "./Definitions";
import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";

export enum Zone {
    "Flur & Treppenhaus & Arbeitszimmer",
    "Küche",
    "Wohnzimmer",
    "Kinderzimmer & Schlafzimmer",
    "Bad & duschbad"
}

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