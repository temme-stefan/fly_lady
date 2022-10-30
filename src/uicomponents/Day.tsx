import {Task} from "../tools/TaskManager";
import SingleDay from "./SingleDay";

export default function Day({tasks, date}: { tasks: Task[], date: Date }) {
    return (
        <section>
            <SingleDay key={date.toDateString()} tasks={tasks} date={date}/>
        </section>
    )
}