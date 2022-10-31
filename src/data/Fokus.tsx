import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";
import {ReoccurringTask, TaskType} from "./Definitions";

const labels = new Map([
    ["blessing", "Home-Blessing"],
    ["food", "Essenplanung & Einkaufszettel"],
]);

export const FokusTasks: ReoccurringTask[] = [
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Friday,
        week: WeekFrequenz.Even,
        type: TaskType.Fokus,
        label: labels.get('blessing')
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Thursday,
        week: WeekFrequenz.Every,
        type: TaskType.Fokus,
        label: labels.get('food')
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Monday,
        week: WeekFrequenz.Every,
        type: TaskType.Fokus,
        label: labels.get('food')
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Friday,
        week: WeekFrequenz.Odd,
        type: TaskType.Fokus,
        label: labels.get('blessing')
    },
]