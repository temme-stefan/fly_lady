import React, {useState} from 'react';
import "./App.css";
import {User} from "./data/User";
import {getTasksOftheDay, getTasksOfTheWeek} from "./tools/TaskManager";
import {FilterScope, FilterState, getTitle} from "./uicomponents/Definitions";
import FilterRegion from "./uicomponents/FilterRegion";
import Week from "./uicomponents/Week";
import SingleDay from "./uicomponents/SingleDay";


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
        localStorage.setItem(filterStorageKey, JSON.stringify(state));
        setTitle(getTitle());
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
            <section>
                <FilterRegion values={filterState} setValues={update}/>
            </section>
            <section className={`taskPane ${filterState.scope === FilterScope.Week ? "week" : ""}`}>
                {filterState.scope === FilterScope.Week ? (
                    <Week tasks={tasks} date={filterState.date}/>
                ) : (
                    <SingleDay tasks={tasks} date={filterState.date}/>
                )}
            </section>
            <footer>
                <div> Icons made by <a href="https://www.flaticon.com/authors/freepik" rel={"external"}
                                       referrerPolicy={"no-referrer"} title="Freepik"> Freepik </a> and <a
                    href="https://www.flaticon.com/de/kostenlose-icons/fenster-putzen" rel={"external"}
                    referrerPolicy={"no-referrer"} title="fenster putzen Icons">surang</a> from <a
                    href="https://www.flaticon.com/" referrerPolicy={"no-referrer"} rel={"external"}
                    title="Flaticon">www.flaticon.com</a></div>
                <div>Font <a href="https://github.com/adobe-fonts/source-sans-pro"
                             title="Source Sans Pro" referrerPolicy="no-referrer"
                             rel="external" target="_blank">Source Sans
                    Pro</a> provided by <a href="https://github.com/adobe-fonts" title="Adobe Fonts"
                                           referrerPolicy="no-referrer" rel="external" target="_blank">Adobe Fonts</a>
                </div>
            </footer>
        </main>
    );
}

export default App;
