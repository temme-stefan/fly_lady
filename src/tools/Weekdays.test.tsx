import React from 'react';
import {dayOfWeek} from "./Weekdays";
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