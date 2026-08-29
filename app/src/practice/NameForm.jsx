import {useState} from "react";

export function NameForm () {
    // Один примитивный state для одного поля — проще, чем объект.
    const [name, setName] = useState('')

    return (
        <>
            {/* value={name} + onChange кладёт набранный текст в state.
                Без onChange инпут стал бы read-only. */}
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter name"/>
            <p>Hello {name}</p>
        </>
    )
}