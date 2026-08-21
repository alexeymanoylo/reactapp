import {useState} from "react";
import s from './ToggleList.module.css'

export function ToggleList () {
    const [items, setItems] = useState([
        {id: 1, name: "List name 1", done: false},
        {id: 2, name: "List name 2", done: false},
        {id: 3, name: "List name 3", done: false},
        {id: 4, name: "List name 4", done: false}
    ])

    function selectItem(id) {
        setItems(items.map(item => item.id === id ? {...item, done: !item.done} : item))
    }

    return (
        <>
            <ul>
                {items.map(item =>(
                    <li key={item.id} className={item.done ? s.done : ""}>
                        {item.name}
                        <button type="button" onClick={() => selectItem(item.id)}>{item.done ? "Undo" : "Done"}</button>
                    </li>
                ))}
            </ul>
        </>
    )
}