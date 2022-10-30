import React from 'react';
import {addDays, dayOfWeek, equalDay, getMonday} from "./Weekdays";
import {Weekday} from "./Definitions";

test('notNan', () => {
    const date = new Date();
    expect(Number.isFinite(dayOfWeek(date))).toBe(true);
})

test('Sunday', () => {
    expect(dayOfWeek(new Date("2022-10-30 00:00:00"))).toBe(Weekday.Sunday)
})

test('Monday', () => {
    expect(dayOfWeek(new Date("2022-10-31 00:00:00"))).toBe(Weekday.Monday)
})
test('Tuesday', () => {
    expect(dayOfWeek(new Date("2022-11-01 00:00:00"))).toBe(Weekday.Tuesday)
})
test('Wednesday', () => {
    expect(dayOfWeek(new Date("2022-11-02 00:00:00"))).toBe(Weekday.Wednesday)
})
test('Thursday', () => {
    expect(dayOfWeek(new Date("2022-11-03 00:00:00"))).toBe(Weekday.Thursday)
})
test('Friday', () => {
    expect(dayOfWeek(new Date("2022-11-04 00:00:00"))).toBe(Weekday.Friday)
})
test('Saturday', () => {
    expect(dayOfWeek(new Date("2022-11-05 00:00:00"))).toBe(Weekday.Saturday)
})
test('Sunday', () => {
    expect(dayOfWeek(new Date("2022-11-06 00:00:00"))).toBe(Weekday.Sunday)
})

test('equalDay', () => {
    const d1 = new Date();
    expect(equalDay(d1, d1)).toBe(true);
    const d2 = new Date(d1);
    d2.setHours(0, 0, 0, 0);
    const d3 = new Date(d1);
    d3.setHours(23, 59, 59, 999);
    expect(equalDay(d2, d3)).toBe(true);
    const d4 = new Date(d1);
    d4.setDate(d4.getDate() + 1);
    expect(equalDay(d1, d4)).toBe(false)
})

test('getMonday', () => {
    const aMonday = new Date("2022-10-31 00:00:00");
    expect(equalDay(aMonday, getMonday(new Date("2022-10-30 00:00:00")))).toBe(false);
    expect(equalDay(aMonday, getMonday(new Date("2022-10-31 00:00:00")))).toBe(true);
    expect(equalDay(aMonday, getMonday(new Date("2022-11-01 00:00:00")))).toBe(true);
    expect(equalDay(aMonday, getMonday(new Date("2022-11-02 00:00:00")))).toBe(true);
    expect(equalDay(aMonday, getMonday(new Date("2022-11-03 00:00:00")))).toBe(true);
    expect(equalDay(aMonday, getMonday(new Date("2022-11-04 00:00:00")))).toBe(true);
    expect(equalDay(aMonday, getMonday(new Date("2022-11-05 00:00:00")))).toBe(true);
    expect(equalDay(aMonday, getMonday(new Date("2022-11-06 00:00:00")))).toBe(true);
    expect(equalDay(aMonday, getMonday(new Date("2022-11-07 00:00:00")))).toBe(false);
})

test('addDays', () => {
    const aDay = new Date("2022-10-31 00:00:00");
    addDays(aDay, 200);
    const sameDay = new Date("2022-10-31 00:00:00");
    expect(equalDay(aDay, sameDay)).toBe(true);
    expect(equalDay(new Date("2022-10-30 00:00:00"), addDays(aDay, -1))).toBe(true);
    expect(equalDay(new Date("2022-10-31 00:00:00"), addDays(aDay, 0))).toBe(true);
    expect(equalDay(new Date("2022-11-01 00:00:00"), addDays(aDay, 1))).toBe(true);
    expect(equalDay(new Date("2022-11-02 00:00:00"), addDays(aDay, 2))).toBe(true);
    expect(equalDay(new Date("2022-11-03 00:00:00"), addDays(aDay, 3))).toBe(true);
    expect(equalDay(new Date("2022-11-04 00:00:00"), addDays(aDay, 4))).toBe(true);
    expect(equalDay(new Date("2022-11-05 00:00:00"), addDays(aDay, 5))).toBe(true);
    expect(equalDay(new Date("2022-11-06 00:00:00"), addDays(aDay, 6))).toBe(true);
    expect(equalDay(new Date("2022-11-07 00:00:00"), addDays(aDay, 7))).toBe(true);
})