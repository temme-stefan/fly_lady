import {FilterState} from "./Definitions";
import "./FilterRegion.css"
import {allUsers, User, UserData} from "../data/User";
import {ManagedSelect} from "./ManagedSelect";
import {TaskType} from "../data/Definitions";

export default function FilterRegion({values, setValues}
                                         : { values: FilterState, setValues: (value: FilterState) => void }) {

    const updateUser = (value: string) => {
        const users = value.split(',').map((s) => User[s as "Sysy" | "Nappo"]);
        setValues({...values, users});
    }
    const updateDate = (value: Date) => {
        value.setHours(12);
        setValues({...values, date: value});
    }

    const updateTypes = (value: TaskType) => {
        const types = new Set(values.types);
        if (types.has(value)) {
            types.delete(value)
        } else {
            types.add(value);
        }
        setValues({...values, types: [...types]})
    }

    const userOptions: [string, string][] = [...UserData.entries()].map(([key, value]) => [User[key], value.displayName]);
    userOptions.unshift([allUsers.map(u => User[u]).join(','), "Alle"]);
    const selectedUser = values.users.map(u => User[u]).join(',');
    const typButtons = [TaskType.Routine, TaskType.Fokus, TaskType.Zone].map(t => {
        return {
            type: t,
            active: values.types.includes(t),
        }
    });
    return (
        <form onSubmit={() => false}>
            <ManagedSelect label={"Nutzer"} key={"filterUser"} value={selectedUser}
                           onChange={ev => updateUser(ev.target.value)}
                           options={userOptions} name={"filterUser"}/>
            <div key={"filterDate"}>
                <label>Datum</label>
                <input type={"date"} value={values.date.toISOString().substring(0, 10)}
                       onChange={ev => ev.target.value && updateDate(new Date(ev.target.value))}/>
            </div>
            <div key={"filterTypes"}>
                <label>Filter</label>
                <div className={"btn-group"}>
                    {typButtons.map(({type, active}, i) => (
                            <button key={`typeSelector_${i}`}
                                    type={"button"}
                                    className={`${TaskType[type].toLowerCase()} ${active ? "active" : ""}`}
                                    onClick={() => {
                                        updateTypes(type);
                                        return false;
                                    }}
                            >
                                {TaskType[type]}
                            </button>
                        )
                    )}
                </div>
            </div>
        </form>
    )
}