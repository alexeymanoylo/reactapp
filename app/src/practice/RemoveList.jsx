import {useState} from "react";

export function RemoveList () {
    const [items, setItems] = useState([
        {id: 1, name: "Item 1"},
        {id: 2, name: "Item 1"},
        {id: 3, name: "Item 1"},
        {id: 4, name: "Item 1"}
    ])

    function removeItem (id) {
        setItems(items.filter(item => item.id !== id))
    }

    return (
        <>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button type="button" onClick={() =>removeItem(item.id)}>x</button>
                    </li>
                ))}
            </ul>
        </>
    )
}