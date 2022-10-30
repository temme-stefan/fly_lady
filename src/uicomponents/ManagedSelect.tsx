export function ManagedSelect(props: { label: string, name: string, value: string, onChange: (ev: any) => void, options: [string, string][] }) {
    return (<div>
        <label htmlFor={props.name}>{props.label}</label>
        <select name={props.name} value={props.value} onChange={props.onChange}>
            {
                props.options.map(([key, value]) => (
                    <option key={`option_${key}`} value={key}>{value}</option>)
                )
            }
        </select>
    </div>);
}