import React, {useState} from 'react';
import './App.css';
import {allUsers, User} from "./data/User";
import {getTasksOfTheWeek} from "./tools/TaskManager";
import TaskCard from "./uicomponents/TaskCard";
import {FilterScope, FilterState} from "./uicomponents/Definitions";
import FilterRegion from "./uicomponents/FilterRegion";


function App() {
    const filterStorageKey = "filter";
    const defaultFilter = {
        user: null,
        scope: FilterScope.Week,
        date: new Date()
    }
    const storedFilter = JSON.parse(localStorage.getItem(filterStorageKey) ?? "{}")
    const initialFilter = {...defaultFilter, ...storedFilter, ...{date: new Date()}};
    const [filterState, setFilterState] = useState<FilterState>(initialFilter);

    const update = (state: FilterState) => {
        setFilterState(state);
        localStorage.setItem(filterStorageKey, JSON.stringify(state));
    }


    const today = new Date();
    const dates = Array.from({length: 10}).map((_, i) => new Date(new Date(today).setDate(today.getDate() + i * 7)));
    return (
        <main>
            <header>
                <h1>Putzplan nach fly-lady</h1>
                <h2>{today.toLocaleDateString()}</h2>
            </header>
            <FilterRegion values={filterState} setValues={update}/>
            {dates.map((d, i) => (
                <section key={`week_${i}`}>
                    <h4>Woche {i}: {new Date(new Date(d).setDate(d.getDate() - ((6 + d.getDay()) % 7))).toLocaleDateString()} - {new Date(new Date(d).setDate(d.getDate() - ((6 + d.getDay()) % 7) + 6)).toLocaleDateString()}</h4>
                    {allUsers.map(user => (
                        <article key={user}>
                            <h3>{user}</h3>
                            {getTasksOfTheWeek(user as User, d).map((t, i) => (
                                <TaskCard task={t} key={`task-${i}`}/>
                            ))}
                        </article>
                    ))}
                </section>
            ))}
        </main>
    );
}

export default App;
