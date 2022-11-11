import {Task} from "../tools/TaskManager";
import "./TaskCard.css";
import {TaskType} from "../data/Definitions";
import React, {useState} from "react";
import {UserData} from "../data/User";
import AnimateHeight from "react-animate-height";

export default function TaskCard({task, alwaysOpen = false}: { task: Task, alwaysOpen?: boolean }) {
    const [open, setOpen] = useState(alwaysOpen);

    const {displayName, picture} = UserData.get(task.user)!;

    const hasDescription = task.description != null && !task.description.match(/^\s*$/);

    const clickHandler = (ev: React.MouseEvent<HTMLElement>) => {
        if (hasDescription) {
            setOpen(!open);
        }
    }

    return (
        <div className={["task", TaskType[task.type].toLowerCase(), hasDescription ? "clickable" : ""].join(" ")}
             onClick={clickHandler}>
            <span className={"avatar"}><img src={`${picture}`} alt={"avatar"}/></span>
            <span className={"username"}>{displayName}</span>
            <div className={"content"}>
                <h3>{task.label}</h3>
                <small>{TaskType[task.type]}</small>
            </div>
            {hasDescription &&
                <div className={`description`}>
                    <AnimateHeight height={open ? "auto" : 0} duration={270}>
                        <p>
                            {task.description}
                        </p>
                    </AnimateHeight>
                </div>
            }
        </div>
    )

}