import {Task} from "../tools/TaskManager";
import {Weekday} from "../tools/Definitions";
import {TaskType} from "../data/Definitions";
import React from "react";
import {UserData} from "../data/User";

export default function TaskCard({task}: { task: Task }) {
    return (
        <div>
            {UserData.get(task.user)?.displayName ?? "unknown"} - {Weekday[task.day]} - {TaskType[task.type]} - {task.label}
        </div>
    )

}