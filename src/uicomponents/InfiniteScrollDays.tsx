import {FilterState} from "./Definitions";
import SingleDay from "./SingleDay";
import {addDays} from "../tools/Weekdays";
import {useEffect, useRef, useState} from "react";

const max = 28;
const step = 1;

export default function InfiniteScrollDays({date, users, types}: FilterState) {
    const [days, setDays] = useState<Date[]>([]);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const current = ref.current;
        if (current && days.length < max) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setDays((value) => {
                            const more = Array.from({length: step}).map((_, i) => {
                                const d = addDays(date, i + value.length);
                                return d;
                            });
                            return [...value, ...more];
                        });
                    }
                });
            });
            observer.observe(current);
            return () => observer.disconnect();
        }
        return undefined;
    })

    useEffect(() => {
        setDays([]);
    }, [date, types, users])

    useEffect(() => {
        if (days.length === 0) {
            setDays([date]);
        }
    }, [days.length,date]);

    return (
        <>
            {
                days.map((date) => (
                    <SingleDay ref={ref} key={date.toDateString()}  {...{date, users, types}}/>
                ))
            }
        </>
    )

}