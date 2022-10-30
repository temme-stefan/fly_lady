import {FilterScope, FilterScopeLabels, FilterState} from "./Definitions";
import {User, UserData} from "../data/User";
import {ManagedSelect} from "./ManagedSelect";

export default function FilterRegion({values, setValues}
                                         : { values: FilterState, setValues: (value: FilterState) => void }) {

    const updateUser = (value: string) => {
        const val = (value === "-" ? null : Number(value) as User);
        setValues({...values, user: val});
    }
    const updateScope = (value: string) => {
        setValues({...values, scope: Number(value) as FilterScope});
    }
    const updateDate = (value: Date) => {
        setValues({...values, date: value});
    }

    const userOptions: [string, string][] = [...UserData.entries()].map(([key, value]) => [key + "", value.displayName]);
    userOptions.unshift(["-", "Alle"]);
    const scopeOptions: [string, string][] = [...FilterScopeLabels.entries()].map(([key, value]) => [key + "", value]);
    return (
        <form onSubmit={() => false}>
            <ManagedSelect label={"Nutzer"} key={"filterUser"} value={values.user + "" ?? "-"}
                           onChange={ev => updateUser(ev.target.value)}
                           options={userOptions} name={"filterUser"}/>
            <ManagedSelect label={"Ansicht"} key={"filterScope"} value={values.scope + ""}
                           onChange={ev => updateScope(ev.target.value)}
                           options={scopeOptions} name={"filterScope"}/>
            <div key={"filterDate"}>
                <label>Datum</label>
                <input type={"date"} value={values.date.toISOString().substring(0, 10)}
                       onChange={ev => ev.target.value && updateDate(new Date(ev.target.value))}/>
            </div>
        </form>
    )
}