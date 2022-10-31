import React, {useState} from 'react';
import "./App.css";
import logo from "./img/window_clean.png";
import {User} from "./data/User";
import {getTasksOftheDay, getTasksOfTheWeek} from "./tools/TaskManager";
import {FilterScope, FilterState, getTitle} from "./uicomponents/Definitions";
import FilterRegion from "./uicomponents/FilterRegion";
import Week from "./uicomponents/Week";
import SingleDay from "./uicomponents/SingleDay";
import {ExternalLink} from "./uicomponents/ExternalLink";


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
                <div className={"logo"} onClick={() => setTitle(getTitle())}><img src={logo}
                                                                                  alt={"Scheibenwischwerkzeuge"}/></div>
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
                <div>
                    <span>Icons made by</span>
                    <ExternalLink url={"https://www.flaticon.com/authors/freepik"}
                                  title={"Freepik Studentavatar Star"} text={"Freepik"}/>

                    <span>and</span>
                    <ExternalLink url={"https://www.flaticon.com/de/autoren/surang"}
                                  title={"surang Hygiene"} text={"surang"}/>
                    <span>from</span>
                    <ExternalLink url={"https://www.flaticon.com/"} title={"Flaticon"} text={"www.flaticon.com"}/>
                </div>
                <div>
                    <span>Font</span>
                    <ExternalLink url={"https://github.com/adobe-fonts/source-sans-pro"} title={"Source Sans Pro"}
                                  text={"Source Sans Pro"}/>
                    <span>provided by</span>
                    <ExternalLink url={"https://github.com/adobe-fonts"} title={"Adobe Fonts"} text={"Adobe Fonts"}/>
                </div>
                <div>
                    <span>Code at</span>
                    <ExternalLink url={"https://github.com/temme-stefan/fly_lady/issues"} title={"Stefans GitHub"}
                                  text={"github"}/>
                </div>
            </footer>
        </main>
    );
}

export default App;
