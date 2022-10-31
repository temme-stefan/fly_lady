import {User, userCount, UserData} from "../data/User";
import {ReoccurringTask, TaskType} from "../data/Definitions";
import {Weekday, WeekFrequenz} from "./Definitions";
import {FokusTasks} from "../data/Fokus";
import {Zone, zoneCount, zoneData, ZoneTasks} from "../data/Zone";
import {RoutineTasks} from "../data/Routine";
import {dateToWeek} from "./DateToWeek";
import {dayOfWeek} from "./Weekdays";

export interface Task {
    day: Weekday,
    label: string,
    description:string,
    type: TaskType,
    user: User,
}

function getZone(date: Date, user: User): Zone {
    const week = dateToWeek(date);
    if (userCount !== 2) {
        throw Error("Zuviele Nutzer");
    }
    const currentWeekStarter = week % zoneCount;
    const lastWeekStarter = (week + zoneCount - 1) % zoneCount;
    return week % 2 !== [...UserData.keys()].indexOf(user) ? currentWeekStarter : lastWeekStarter;
}

function toTask(reoccuringTask: ReoccurringTask, date: Date, user: User): Task {
    const day = reoccuringTask.dayOfWeek;
    const type = reoccuringTask.type;
    let label = reoccuringTask.label ?? "unknown TaskCard";
    let description = reoccuringTask.description ?? "";
    switch (type) {
        case TaskType.Zone:
            const data = zoneData.get(getZone(date,user));
            if (data){
                label = data.label;
                description = data?.description ?? description;
            }
            break;
    }

    return {
        day, type, label, user, description
    }
}

function isTaskInWeek(task: ReoccurringTask, date: Date) {
    const week = dateToWeek(date);
    switch (task.week) {
        case WeekFrequenz.Every:
            return true;
        case WeekFrequenz.Odd:
            return week % 2 === 1;
        case WeekFrequenz.Even:
            return week % 2 === 0;
    }
}

function getReoccuringTasks() {
    return [...RoutineTasks, ...FokusTasks, ...ZoneTasks]
}

export function getTasksOfTheWeek(user: User, date: Date): Task[] {
    return getReoccuringTasks().filter(t => t.user === user && isTaskInWeek(t, date)).map(t => toTask(t, date, user))
}

export function getTasksOftheDay(user: User, date: Date): Task[] {
    return getReoccuringTasks().filter(t => t.user === user && isTaskInWeek(t, date) && dayOfWeek(date) === t.dayOfWeek).map(t => toTask(t, date, user))
}

