import {Task} from "../tools/TaskManager";
import React from "react";
import TaskCard from "./TaskCard";

export default function SingleDay({tasks, date}: { tasks: Task[], date: Date }) {
    const [day, dateS] = date.toLocaleDateString("de-DE", {dateStyle: "full"}).split(", ")
    return (
        <article>
            <header><h2><span>{day}</span><small>{dateS}</small></h2></header>
            {tasks.map((t, i) => (
                <TaskCard task={t} key={`task-${i}`}/>
            ))
            }
        </article>
    );
}