import {useState} from "react";

export function NameForm () {
    const [name, setName] = useState('')

    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter name"/>
            <p>Hello {name}</p>
        </>
    )
}