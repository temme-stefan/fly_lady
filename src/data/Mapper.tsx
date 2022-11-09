import {homeUser, User} from "./User";
import {Weekday, WeekFrequenz} from "../tools/Definitions";
import {
    ImportDayStringList,
    ImportDayStrings,
    ImportTask,
    ImportUsers,
    ReoccurringTask,
    TaskMetaData,
    TaskType
} from "./Definitions";

function parseWeekday(toParse: ImportDayStringList): Weekday[] {
    if (toParse !== "Daily") {
        return (toParse.split(',') as ImportDayStrings[]).map(d => Weekday[d]);
    }
    return [Weekday.Sunday,
        Weekday.Monday,
        Weekday.Tuesday,
        Weekday.Wednesday,
        Weekday.Thursday,
        Weekday.Friday,
        Weekday.Saturday];
}

function parseUser(toParse:ImportUsers){
    if (toParse==="Home"){
        return homeUser();
    }
    else{
        return User[toParse];
    }
}

export function toReoccurringTasks(t: ImportTask, type: TaskType, lookup: Map<string, TaskMetaData> = new Map()): ReoccurringTask[] {
    const {key, user, dayOfWeek, weekFrequenz} = t;
    return parseWeekday(dayOfWeek).map(day => {
            return {
                ...lookup.get(key),
                user: parseUser(user),
                dayOfWeek: day,
                week: WeekFrequenz[weekFrequenz],
                type
            }
        }
    );
}