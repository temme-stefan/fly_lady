import {FilterScope, FilterState} from "./Definitions";
import SingleDay from "./SingleDay";
import {addDays} from "../tools/Weekdays";



export default function ({date, users, types, scope}: FilterState) {
    const week = Array.from({length: scope==FilterScope.SingleDay?1:7 }).map((_, i) => {
        const d = addDays(date, i);
        return d;
    });
    return (
        <>
            {week.map((date) => (
                <SingleDay key={date.toDateString()}  {...{date,users,types,scope} }/>
            ))}
        </>
    )

}