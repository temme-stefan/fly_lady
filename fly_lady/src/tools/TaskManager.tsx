import {allUsers, User, userCount} from "../data/User";
import {isRoutineTask, ReoccurringTask, TaskType} from "../data/Definitions";
import {Weekday, WeekFrequenz} from "./Definitions";
import {blessingLabel, BlessingTasks} from "../data/HomeBlessing";
import {Zone, zoneCount, ZoneTasks} from "../data/Zone";
import {Routine, RoutineTasks} from "../data/Routine";
import {dateToWeek} from "./DateToWeek";
import {dayOfWeek} from "./Weekdays";

export interface Task {
    day: Weekday,
    label: string,
    type: TaskType
}

function getZone(date: Date, user: User): Zone {
    const week = dateToWeek(date);
    if (userCount != 2) {
        throw Error("Zuviele Nutzer");
    }
    const currentWeekStarter = week % zoneCount;
    const lastWeekStarter = (week + zoneCount - 1) % zoneCount;
    return week % 2 == allUsers.indexOf(user) ? currentWeekStarter : lastWeekStarter;
}

function toTask(reoccuringTask: ReoccurringTask, date: Date, user: User): Task {
    const day = reoccuringTask.dayOfWeek;
    const type = reoccuringTask.type;
    let label = "unknown Task";
    switch (type) {
        case TaskType.Blessing:
            label = blessingLabel;
            break;
        case TaskType.Zone:
            label = Zone[getZone(date, user)]
            break;
        case TaskType.Routine:
            if (isRoutineTask(reoccuringTask)) {
                label = Routine[reoccuringTask.routineType]
            }
            break;
    }

    return {
        day, type, label
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
    return [...RoutineTasks, ...BlessingTasks, ...ZoneTasks]
}

export function getTaskOfTheWeek(user: User, date: Date): Task[] {
    return getReoccuringTasks().filter(t => t.user === user && isTaskInWeek(t, date)).map(t => toTask(t, date, user))
}

export function getTasksOftheDay(user: User, date: Date): Task[] {
    return getReoccuringTasks().filter(t => t.user === user && isTaskInWeek(t, date) && dayOfWeek(date) === t.dayOfWeek).map(t => toTask(t, date, user))
}

