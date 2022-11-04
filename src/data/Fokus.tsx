import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";
import {ReoccurringTask, TaskMetaData, TaskType} from "./Definitions";

export enum Focus {
    blessing,
    food
}

export const FocusMeta: Map<Focus, TaskMetaData> = new Map([
    [Focus.blessing, {label: "Home-Blessing", description: "Lorem Ipsum sid Dolorum"}],
    [Focus.food, {label: "Essenplanung & Einkaufszettel"}],
]);

export const FokusTasks: ReoccurringTask[] = [
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Friday,
        week: WeekFrequenz.Even,
        type: TaskType.Fokus,
        ...FocusMeta.get(Focus.blessing)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Thursday,
        week: WeekFrequenz.Every,
        type: TaskType.Fokus,
        ...FocusMeta.get(Focus.food)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Monday,
        week: WeekFrequenz.Every,
        type: TaskType.Fokus,
        ...FocusMeta.get(Focus.food)!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Friday,
        week: WeekFrequenz.Odd,
        type: TaskType.Fokus,
        ...FocusMeta.get(Focus.blessing)!
    },
]