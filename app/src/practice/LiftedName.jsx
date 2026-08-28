import {useState} from "react";

function NameInput({value, onChange}) {
    return <input type="text" value={value} onChange={onChange}/>
}

function NameDisplay({name}) {
    return <p>Hello {name}</p>
}

export function LiftedName() {
    const [name, setName] = useState('')

    return(
        <>
            <NameInput value={name} onChange={e => setName(e.target.value)}/>
            <NameDisplay name={name}></NameDisplay>
        </>
    )
}