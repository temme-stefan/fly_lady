import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";
import {ReoccurringTask, TaskMetaData, TaskType} from "./Definitions";

export enum Focus {
    blessing,
    food,
    EinkaufDM,
    ArturAllein,
    RobinAllein,
    BeideKinder,
    KleidungKinder,
}

export const FocusMeta: Map<Focus, TaskMetaData> = new Map([
    [Focus.blessing, {
        label: "Home-Blessing",
        description: "Staubsaugen 30 Min, Duschbad light 15 Min, Türen & Spiegel & Steckdosen 15 Min"
    }],
    [Focus.food, {label: "Essenplanung & Einkaufszettel",description:"Essensplan erstellen & bei Picnic bestellen"}],
    [Focus.EinkaufDM, {label: "Einkaufen bei dm", description: "Einkaufen bei dm (per App oder in person)"}],
    [Focus.ArturAllein, {label: "Nachmittag mit Artur allein", description: "Nachmittag mit Artur allein"}],
    [Focus.RobinAllein, {label: "Nachmittag mit Robin allein", description: "Nachmittag mit Robin allein"}],
    [Focus.BeideKinder, {label: "Nachmittag mit beiden Kindern", description: "Nachmittag mit beiden Kindern"}],
    [Focus.KleidungKinder, {
        label: "Kleidung der Kinder aktualisieren",
        description: "Kleidung der Kinder aussortieren / in Kartons und Keller sortieren / neue Kleidung aus dem Keller holen oder einkaufen"
    }],
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