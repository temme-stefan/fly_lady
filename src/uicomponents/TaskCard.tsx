import {Task} from "../tools/TaskManager";
import "./TaskCard.css";
import {Weekday} from "../tools/Definitions";
import {TaskType} from "../data/Definitions";
import React from "react";
import {UserData} from "../data/User";

export default function TaskCard({task}: { task: Task }) {
    const {displayName, picture} = UserData.get(task.user)!;
    return (
        <div className={["task", TaskType[task.type].toLowerCase()].join(" ")}>
            <span className={"avatar"}><img src={`${picture}`} alt={"avatar"}/></span>
            <span className={"username"}>{displayName}</span>
            <div className={"content"}>
                <h3>{task.label}</h3>
                <small>{TaskType[task.type]}</small>
            </div>
        </div>
    )

}