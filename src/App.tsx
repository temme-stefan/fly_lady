import React, {useState} from 'react';
import './App.css';
import {User} from "./data/User";
import {getTasksOftheDay, getTasksOfTheWeek} from "./tools/TaskManager";
import {FilterScope, FilterState, getTitle} from "./uicomponents/Definitions";
import FilterRegion from "./uicomponents/FilterRegion";
import Week from "./uicomponents/Week";
import Day from "./uicomponents/Day";


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
    const [title, setTitle] = useState<string>(getTitle());
    const update = (state: FilterState) => {
        setFilterState(state);
        setTitle(getTitle);
        localStorage.setItem(filterStorageKey, JSON.stringify(state));
    }

    const users = [User.Sysy, User.Nappo].filter(u => filterState.user === null || filterState.user === u);
    const tasks = users.map(
        u => filterState.scope === FilterScope.SingleDay ? getTasksOftheDay(u, filterState.date) : getTasksOfTheWeek(u, filterState.date)
    ).flat();
    return (
        <main>
            <header>
                <h1>{title}</h1>
            </header>
            <FilterRegion values={filterState} setValues={update}/>
            {filterState.scope === FilterScope.Week ? (
                <Week tasks={tasks} date={filterState.date}/>
            ) : (
                <Day tasks={tasks} date={filterState.date}/>
            )}
        </main>
    );
}

export default App;
