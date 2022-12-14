import React from "react";
import {getTasksOfTheDay} from "./TaskManager";
import {User} from "../data/User";
import {TaskType} from "../data/Definitions";
import {FocusMeta} from "../data/Fokus";
import {Zone, ZoneMeta} from "../data/Zone";

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

test('syncWithRealworld_Zone', () => {
    expect(getTasksOfTheDay(User.Nappo, new Date("2023-01-03"))
        .filter(t => t.type === TaskType.Zone && t.label === ZoneMeta.get(Zone.Wohnzimmer)!.label).length)
        .toBe(0);
    expect(getTasksOfTheDay(User.Nappo, new Date("2023-01-10"))
        .filter(t => t.type === TaskType.Zone && t.label === ZoneMeta.get(Zone.Wohnzimmer)!.label).length)
        .toBeGreaterThan(0);
    expect(getTasksOfTheDay(User.Nappo, new Date("2023-01-17"))
        .filter(t => t.type === TaskType.Zone && t.label === ZoneMeta.get(Zone.Wohnzimmer)!.label).length)
        .toBeGreaterThan(0);
    expect(getTasksOfTheDay(User.Nappo, new Date("2023-01-24"))
        .filter(t => t.type === TaskType.Zone && t.label === ZoneMeta.get(Zone.Wohnzimmer)!.label).length)
        .toBe(0);
    expect(getTasksOfTheDay(User.Sysy, new Date("2023-01-16"))
        .filter(t => t.type === TaskType.Zone && t.label === ZoneMeta.get(Zone.Küche)!.label).length)
        .toBeGreaterThan(0);
    expect(getTasksOfTheDay(User.Sysy, new Date("2023-01-23"))
        .filter(t => t.type === TaskType.Zone && t.label === ZoneMeta.get(Zone.Küche)!.label).length)
        .toBeGreaterThan(0);

})
