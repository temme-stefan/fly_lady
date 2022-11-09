import "./SingleDay.css"
import {Task} from "../tools/TaskManager";
import React from "react";
import TaskCard from "./TaskCard";
import {equalDay} from "../tools/Weekdays";

export default function SingleDay({tasks, date}: { tasks: Task[], date: Date }) {
    const [day, dateS] = date.toLocaleDateString("de-DE", {dateStyle: "full"}).split(", ")
    const sorted = [...tasks];
    sorted.sort((a, b) => Math.sign(a.sort - b.sort))
    return (
        <article className={`day ${equalDay(new Date(), date)?"today":""}`}>
            <header><h2><span>{day}</span><small>{dateS}</small></h2></header>
            {sorted.map((t, i) => (
                <TaskCard task={t} key={`task-${i}`}/>
            ))
            }
        </article>
    );
}