import {useState} from "react";

function ItemForm ({onAdd}) {
    const [text, setText] = useState('')

    return(
        <>
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Add item..."/>
            <button type="submit" onSubmit={e => e.preventDefault}>Add</button>
        </>
    )
}

export function LifterList () {
    const [items, setItems] = useState([])

    return (
        <ItemForm/>
    )
}