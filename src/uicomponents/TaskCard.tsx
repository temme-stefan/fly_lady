import {Task} from "../tools/TaskManager";
import {Weekday} from "../tools/Definitions";
import {TaskType} from "../data/Definitions";
import React from "react";

export default function TaskCard({task: task}: { task: Task }) {
    return (
        <div>
            {Weekday[task.day]} - {TaskType[task.type]} - {task.label}
        </div>
    )

}