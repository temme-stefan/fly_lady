import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";
import {ReoccurringTask, TaskMetaData, TaskType} from "./Definitions";

const meta: Map<string, TaskMetaData> = new Map([
    ["blessing", {label: "Home-Blessing", description: "Lorem Ipsum sid Dolorum"}],
    ["food", {label: "Essenplanung & Einkaufszettel"}],
]);

export const FokusTasks: ReoccurringTask[] = [
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Friday,
        week: WeekFrequenz.Even,
        type: TaskType.Fokus,
        ...meta.get('blessing')!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Thursday,
        week: WeekFrequenz.Every,
        type: TaskType.Fokus,
        ...meta.get('food')!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Monday,
        week: WeekFrequenz.Every,
        type: TaskType.Fokus,
        ...meta.get('food')!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Friday,
        week: WeekFrequenz.Odd,
        type: TaskType.Fokus,
        ...meta.get('blessing')!
    },
]