import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";
import {ReoccurringTask, TaskType} from "./Definitions";

const labels = new Map([
    ["blessing", "Home-Blessing"]
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
        user: User.Sysy,
        dayOfWeek: Weekday.Friday,
        week: WeekFrequenz.Odd,
        type: TaskType.Fokus,
        label: labels.get('blessing')
    },
]