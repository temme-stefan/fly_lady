import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";
import {ReoccurringTask, TaskType} from "./Definitions";

export const blessingLabel = "Home-Blessing"

export const BlessingTasks: ReoccurringTask[] = [
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Friday,
        week: WeekFrequenz.Even,
        type: TaskType.Blessing
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Friday,
        week: WeekFrequenz.Odd,
        type: TaskType.Blessing
    },
]