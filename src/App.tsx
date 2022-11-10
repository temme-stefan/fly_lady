import React, {useEffect, useRef, useState} from 'react';
import "./App.css";
import logo from "./img/window_clean.png";
import {allUsers, User} from "./data/User";
import {FilterScope, FilterState, getTitle} from "./uicomponents/Definitions";
import FilterRegion from "./uicomponents/FilterRegion";
import Week from "./uicomponents/Week";
import SingleDay from "./uicomponents/SingleDay";
import {ExternalLink} from "./uicomponents/ExternalLink";
import {TaskType} from "./data/Definitions";


function App() {

    //region Filter state
    const filterStorageKey = "filter";
    const today = new Date();
    today.setHours(12);
    const defaultFilter = {
        users: [...allUsers],
        scope: FilterScope.Week,
        date: today,
        types: [TaskType.Routine, TaskType.Fokus, TaskType.Zone]
    }
    const storedFilter = JSON.parse(localStorage.getItem(filterStorageKey) ?? "{}")
    const initialFilter = {...defaultFilter, ...storedFilter, ...{date: today}};
    const [filterState, setFilterState] = useState<FilterState>(initialFilter);
    const [title, setTitle] = useState<string>(getTitle());
    const update = (state: FilterState) => {
        setFilterState(state);
        localStorage.setItem(filterStorageKey, JSON.stringify(state));
        setTitle(getTitle());
    }
    //endregion

    //region Make Filterregion sticky
    const stickyPart = useRef<HTMLDivElement>(null);
    const [isSticky, setSticky] = useState(false);
    const callback: IntersectionObserverCallback = (entries) => {
        const [entry] = entries;
        setSticky(!entry.isIntersecting)
    }
    useEffect(() => {
        const obs = new IntersectionObserver(callback, {threshold: [1]});
        const current = stickyPart.current;
        if (current) {
            obs.observe(current);
        }
        return () => {
            if (current) {
                obs.unobserve(current);
            }
        }
    }, [stickyPart])
    //endregion


    return (
        <main>
            <header>
                <div className={"logo"} onClick={() => setTitle(getTitle())}><img src={logo}
                                                                                  alt={"Scheibenwischwerkzeuge"}/></div>
                <h1>{title}</h1>
            </header>
            <section ref={stickyPart} className={`filter ${isSticky ? "sticked" : ""}`}>
                <FilterRegion values={filterState} setValues={update}/>
            </section>
            <section className={`taskPane`}>
                {filterState.scope === FilterScope.Week ? (
                    <Week {...filterState}/>
                ) : (
                    <SingleDay {...filterState} />
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
