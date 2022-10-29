import React from 'react';
import './App.css';
import {allUsers, User} from "./data/User";
import {getTasksOfTheWeek} from "./tools/TaskManager";
import {Weekday} from "./tools/Definitions";
import {TaskType} from "./data/Definitions";

function App() {
    const today = new Date();
    const dates = Array.from({length: 10}).map((_, i) => new Date(new Date(today).setDate(today.getDate() + i * 7)));
    return (
        <main>
            <header>
                <h1>Putzplan nach fly-lady</h1>
                <h2>{today.toLocaleDateString()}</h2>
            </header>
            {dates.map((d, i) => (
                <section key={`week_${i}`}>
                    <h4>Woche {i}: {new Date(new Date(d).setDate(d.getDate()-((6+d.getDay())%7))).toLocaleDateString()} - {new Date(new Date(d).setDate(d.getDate()-((6+d.getDay())%7)+6)).toLocaleDateString()}</h4>
                    {allUsers.map(user => (
                        <article key={user}>
                            <h3>{user}</h3>
                            {getTasksOfTheWeek(user as User, d).map((t, i) => (
                                <div key={`task-${i}`}>
                                    {Weekday[t.day]} - {TaskType[t.type]} - {t.label}
                                </div>
                            ))}
                        </article>
                    ))}
                </section>
            ))}
        </main>
    );
}

export default App;
