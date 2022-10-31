import {Task} from "../tools/TaskManager";
import {addDays, dayOfWeek, getMonday} from "../tools/Weekdays";
import SingleDay from "./SingleDay";

export default function Week({tasks, date}: { tasks: Task[], date: Date }) {
    const monday = getMonday(date);
    const partition = Array.from({length: 7}).map((_, i) => {
        const date = addDays(monday, i);
        const weekDay = dayOfWeek(date);
        const part = tasks.filter(t => t.day === weekDay);
        return {date, tasks: part};
    });

    return (
        <>
            {partition.map(({date, tasks}) => (
                <SingleDay key={date.toDateString()} tasks={tasks} date={date}/>
            ))}
        </>
    );
}