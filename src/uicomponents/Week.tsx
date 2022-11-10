import {Task} from "../tools/TaskManager";
import {addDays, dayOfWeek, getMonday} from "../tools/Weekdays";
import SingleDay from "./SingleDay";
import {FilterState} from "./Definitions";

export default function Week({date,users,types,scope}:FilterState) {
    const monday = getMonday(date);
    const week = Array.from({length: 7}).map((_, i) => {
        const date = addDays(monday, i);
        const weekDay = dayOfWeek(date);
        return date;
    });

    return (
        <>
            {week.map((date) => (
                <SingleDay key={date.toDateString()}  {...{date,users,types,scope} }/>
            ))}
        </>
    );
}