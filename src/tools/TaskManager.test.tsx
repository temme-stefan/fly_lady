import React from "react";
import {getTasksOfTheDay} from "./TaskManager";
import {User} from "../data/User";
import {TaskType} from "../data/Definitions";
import {FocusMeta} from "../data/Fokus";
import {Zone, ZoneMeta} from "../data/Zone";
import {addDays, getMonday} from "./Weekdays";

test('syncWithRealworld_Blessing', () => {
    const blessingLabel = FocusMeta.get("blessing")!.label;
    expect(getTasksOfTheDay(User.Sysy, new Date("2022-11-11"))
        .filter(t => t.type === TaskType.Fokus && t.label === blessingLabel).length)
        .toBe(0);
    expect(getTasksOfTheDay(User.Nappo, new Date("2022-11-18"))
        .filter(t => t.type === TaskType.Fokus && t.label === blessingLabel).length)
        .toBe(0);
    expect(getTasksOfTheDay(User.Nappo, new Date("2022-11-11"))
        .filter(t => t.type === TaskType.Fokus && t.label === blessingLabel).length)
        .toBe(1);
    expect(getTasksOfTheDay(User.Sysy, new Date("2022-11-18"))
        .filter(t => t.type === TaskType.Fokus && t.label === blessingLabel).length)
        .toBe(1);
})

expect.extend({
    toConsistOfSingleString(got: Set<string>, test: string) {
        const pass = got.size == 1 && got.has(test);
        const message = () => [
            got.size != 1 ? `expected Set to contain single element, got ${got.size}.` : false,
            !got.has(test) ? `expected Set to contain ${test}.` : false
        ].filter(Boolean).join(" ");
        return {pass, message}
    },
    toConsistOfSingleStringButNotTest(got: Set<string>, test: string) {
        const pass = got.size == 1 && !got.has(test);
        const message = () => [
            got.size != 1 ? `expected Set to contain single element, got ${got.size}.` : false,
            got.has(test) ? `expected Set not to contain ${test}, got ${test}.` : false
        ].filter(Boolean).join(" ");
        return {pass, message}
    }
})

test('syncWithRealworld_Zone', () => {
    const getZoneOfTheWeekAndUser = (user: User, date: Date) => {
        const monday = getMonday(date);
        return new Set(
            Array.from({length: 7})
                .map((_, i) => addDays(monday, i))
                .map(day => getTasksOfTheDay(user, day).filter(task => task.type == TaskType.Zone))
                .flat()
                .map(t => t.label)
        );
    }
    const start = new Date("2023-03-14");
    const nappoNextTwoWeek = Zone.Küche;
    const sysyOverNexTwoWeeks = Zone.Bäder;
    expect( getZoneOfTheWeekAndUser(User.Nappo, start)).toConsistOfSingleStringButNotTest(ZoneMeta.get(nappoNextTwoWeek)!.label);
    expect( getZoneOfTheWeekAndUser(User.Nappo, addDays(start, 7))).toConsistOfSingleString(ZoneMeta.get(nappoNextTwoWeek)!.label);
    expect( getZoneOfTheWeekAndUser(User.Nappo, addDays(start, 14))).toConsistOfSingleString(ZoneMeta.get(nappoNextTwoWeek)!.label);
    expect( getZoneOfTheWeekAndUser(User.Nappo, addDays(start, 21))).toConsistOfSingleStringButNotTest(ZoneMeta.get(nappoNextTwoWeek)!.label);
    expect( getZoneOfTheWeekAndUser(User.Sysy, addDays(start, 14))).toConsistOfSingleString(ZoneMeta.get(sysyOverNexTwoWeeks)!.label);
    expect( getZoneOfTheWeekAndUser(User.Sysy, addDays(start, 21))).toConsistOfSingleString(ZoneMeta.get(sysyOverNexTwoWeeks)!.label);
})
