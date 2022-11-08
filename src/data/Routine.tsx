import {ReoccurringTask, TaskMetaData, TaskType} from "./Definitions";
import {User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";

export enum Routine {
    MorgensBad,
    MorgensKitaKeller,
    NachmKitaKeller,
    MüllBereit,
    WäscheAuf,
    WäscheBereit,
    ArturBett,
    Küche,
    SpülmaschineAus,
    MiniAufräumen,
    SchlafzimmerLüften,
    KinderzimmerLüften,
}

export const RoutineMeta = new Map<Routine, TaskMetaData>([
    [Routine.MorgensBad, {label: "Morgens im Bad", description: "Artur waschen und anziehen & Bad light"}],
    [Routine.MorgensKitaKeller, {
        label: "Morgens Kita / Keller",
        description: "Artur zur Kita bringen & Wäsche anmachen & ggf. Trockner ausräumen"
    }],
    [Routine.NachmKitaKeller, {
        label: "Nachmittags Müll / Kita / Keller",
        description: "Müll rausbringen & Artur von Kita abholen & Wäsche hochbringen oder umtopfen"
    }],
    [Routine.MüllBereit, {
        label: "Müll bereitstellen",
        description: "Volle Müllsäcke vor die Tür & neue Müllsäcke verteilen"
    }],
    [Routine.WäscheAuf, {label: "Wäsche auf(- &ab-)hängen", description: "Wäsche aufhängen & ggf. Wäsche abhängen"}],
    [Routine.WäscheBereit, {
        label: "Wäsche bereitstellen",
        description: "Wäschekorb mit Wäsche, die als nächstes gewaschen werden soll, bereitstellen"
    }],
    [Routine.ArturBett, {
        label: "Artur zu Bett bringen",
        description: "Mit Artur aufräumen, Zähne putzen, umziehen, Schlafwindel machen, neuen Wasserbecher machen, vorlesen, Einschlafbegleitung"
    }],
    [Routine.Küche, {
        label: "Abends die Küche machen",
        description: "Tisch abräumen und wischen, Wickeltisch rübertragen, Wohnzimmer lüften, Spülmaschine einräumen, Spülen (inkl. Flaschen spülen), Sprudelwasser und Heißwasser machen, Kaffeemaschine versorgen, Altpapier aus Küche raus, Küchenspüle putzen"
    }],
    [Routine.SpülmaschineAus, {
        label: "Spülmaschine ausräumen",
        description: "Spülmaschine ausräumen & von Hand Gespültes wegräumen"
    }],
    [Routine.MiniAufräumen, {label: "Mini-Aufräumen", description: "5 Minuten ins Aufräumen investieren"}],
    [Routine.SchlafzimmerLüften, {
        label: "Schlafzimmer lüften",
        description: "Im Schlaf- bzw. Kinderzimmer Betten aufschlagen und lüften"
    }],
    [Routine.KinderzimmerLüften, {
        label: "Kinderzimmer lüften",
        description: "Im Kinderzimmer Betten aufschlagen und lüften"
    }],
]);

export const RoutineTasks: ReoccurringTask[] = [
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Friday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensBad)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Friday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensKitaKeller)!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Monday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensBad)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Monday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensKitaKeller)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Monday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.NachmKitaKeller)!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Monday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.WäscheAuf)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Monday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.ArturBett)!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Monday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.Küche)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Thursday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensBad)!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Thursday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensKitaKeller)!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Thursday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.NachmKitaKeller)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Thursday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.WäscheAuf)!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Thursday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.ArturBett)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Thursday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.Küche)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Tuesday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensBad)!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Tuesday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensKitaKeller)!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Tuesday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.NachmKitaKeller)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Tuesday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.WäscheAuf)!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Tuesday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.ArturBett)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Tuesday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.Küche)!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Wednesday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensBad)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Wednesday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensKitaKeller)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Wednesday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.NachmKitaKeller)!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Wednesday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.WäscheAuf)!
    },
    {
        user: User.Nappo,
        dayOfWeek: Weekday.Wednesday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.ArturBett)!
    },
    {
        user: User.Sysy,
        dayOfWeek: Weekday.Wednesday,
        week: WeekFrequenz.Every,
        type: TaskType.Routine,
        ...RoutineMeta.get(Routine.Küche)!
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Friday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.NachmKitaKeller)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Friday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.ArturBett)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Saturday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensBad)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Saturday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.WäscheAuf)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Saturday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.Küche)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Sunday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensKitaKeller)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Sunday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.NachmKitaKeller)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Sunday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.ArturBett)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Friday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.NachmKitaKeller)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Friday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.ArturBett)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Saturday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensBad)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Saturday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.WäscheAuf)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Saturday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.Küche)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Sunday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensKitaKeller)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Sunday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.NachmKitaKeller)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Sunday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.ArturBett)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Friday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.WäscheAuf)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Friday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.Küche)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Saturday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensKitaKeller)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Saturday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.NachmKitaKeller)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Saturday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.ArturBett)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Sunday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensBad)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Sunday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.WäscheAuf)
    },
    {
        user: User.Nappo, dayOfWeek: Weekday.Sunday, week: WeekFrequenz.Even, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.Küche)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Friday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.WäscheAuf)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Friday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.Küche)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Saturday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensKitaKeller)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Saturday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.NachmKitaKeller)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Saturday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.ArturBett)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Sunday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.MorgensBad)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Sunday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.WäscheAuf)
    },
    {
        user: User.Sysy, dayOfWeek: Weekday.Sunday, week: WeekFrequenz.Odd, type: TaskType.Routine,
        ...RoutineMeta.get(Routine.Küche)
    },
]