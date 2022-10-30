import {Task} from "../tools/TaskManager";
import React from "react";
import TaskCard from "./TaskCard";

export default function SingleDay({tasks, date}: { tasks: Task[], date: Date }) {
    return (
        <article>
            <header><h2>{date.toLocaleDateString()}</h2></header>
            {tasks.map((t, i) => (
                <TaskCard task={t} key={`task-${i}`}/>
            ))
            }
        </article>
    );
}