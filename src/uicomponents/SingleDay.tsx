import "./SingleDay.css"
import {getTasksOfTheDay} from "../tools/TaskManager";
import React from "react";
import TaskCard from "./TaskCard";
import {equalDay} from "../tools/Weekdays";
import { FilterState} from "./Definitions";

export default function SingleDay({users, date, types}: FilterState) {
    const [day, dateS] = date.toLocaleDateString("de-DE", {dateStyle: "full"}).split(", ");

    const tasks = users.map(
        u => getTasksOfTheDay(u, date)
    ).flat().filter(t => types.includes(t.type));
    const sorted = [...tasks];
    sorted.sort((a, b) => Math.sign(a.sort - b.sort))

    return (
        <article className={`day ${equalDay(new Date(), date) ? "today" : ""}`}>
            <header><h2><span>{day}</span><small>{dateS}</small></h2></header>
            {sorted.map((t, i) => (
                <TaskCard task={t} key={`task-${i}`}/>
            ))
            }
        </article>
    );
}