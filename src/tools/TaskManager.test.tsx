import React from "react";
import {getTasksOfTheWeek} from "./TaskManager";
import {User} from "../data/User";
import {TaskType} from "../data/Definitions";
import {FocusMeta} from "../data/Fokus";
import {Zone, ZoneMeta} from "../data/Zone";

test('syncWithRealworld_Blessing', () => {
    const blessingLabel = FocusMeta.get("blessing")!.label;
    expect(getTasksOfTheWeek(User.Sysy, new Date("2022-11-11"))
        .filter(t => t.type === TaskType.Fokus && t.label === blessingLabel).length)
        .toBe(0);
    expect(getTasksOfTheWeek(User.Nappo, new Date("2022-11-18"))
        .filter(t => t.type === TaskType.Fokus && t.label === blessingLabel).length)
        .toBe(0);
    expect(getTasksOfTheWeek(User.Nappo, new Date("2022-11-11"))
        .filter(t => t.type === TaskType.Fokus && t.label === blessingLabel).length)
        .toBe(1);
    expect(getTasksOfTheWeek(User.Sysy, new Date("2022-11-18"))
        .filter(t => t.type === TaskType.Fokus && t.label === blessingLabel).length)
        .toBe(1);
})

test('syncWithRealworld_Zone', () => {
    expect(getTasksOfTheWeek(User.Nappo, new Date("2022-10-21"))
        .filter(t => t.type === TaskType.Zone && t.label === ZoneMeta.get(Zone.Wohnzimmer)!.label).length)
        .toBe(0);
    expect(getTasksOfTheWeek(User.Nappo, new Date("2022-10-28"))
        .filter(t => t.type === TaskType.Zone && t.label === ZoneMeta.get(Zone.Wohnzimmer)!.label).length)
        .toBeGreaterThan(0);
    expect(getTasksOfTheWeek(User.Nappo, new Date("2022-11-04"))
        .filter(t => t.type === TaskType.Zone && t.label === ZoneMeta.get(Zone.Wohnzimmer)!.label).length)
        .toBeGreaterThan(0);
    expect(getTasksOfTheWeek(User.Nappo, new Date("2022-11-11"))
        .filter(t => t.type === TaskType.Zone && t.label === ZoneMeta.get(Zone.Wohnzimmer)!.label).length)
        .toBe(0);
    expect(getTasksOfTheWeek(User.Sysy, new Date("2022-11-04"))
        .filter(t => t.type === TaskType.Zone && t.label === ZoneMeta.get(Zone.Küche)!.label).length)
        .toBeGreaterThan(0);
    expect(getTasksOfTheWeek(User.Sysy, new Date("2022-11-11"))
        .filter(t => t.type === TaskType.Zone && t.label === ZoneMeta.get(Zone.Küche)!.label).length)
        .toBeGreaterThan(0);

})
