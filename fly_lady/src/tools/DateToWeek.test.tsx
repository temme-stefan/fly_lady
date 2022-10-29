import React from 'react';
import {dateToWeek} from "./DateToWeek";



test('notNan', () => {
    const date = new Date();
    expect(Number.isFinite(dateToWeek(date))).toBe(true);
})

test('same WeekFrequenz all week', () => {
    const endOfWeek = new Date("2022-10-30 23:59:59");
    const startOfWeek = new Date("2022-10-24 00:00:00");
    expect(dateToWeek(startOfWeek)).toBe(dateToWeek(endOfWeek));
})

test('weekChange', () => {
    const endOfWeek = new Date("2022-10-30 23:59:59");
    const startOfWeek = new Date("2022-10-31 00:00:00");
    expect(dateToWeek(startOfWeek)).toBe(dateToWeek(endOfWeek) + 1);
})

test('yearChange', () => {
    const year1 = new Date("2022-01-01 00:00:00");
    const year2 = new Date("2023-01-01 00:00:00");
    expect(dateToWeek(year1)).toBe(dateToWeek(year2) - 52);
})