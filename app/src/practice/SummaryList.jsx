import {useState} from "react";

export function SummaryList () {
    const [items, setItems] = useState([
        {id: 1, name: "List name 1", done: true},
        {id: 2, name: "List name 2", done: false},
        {id: 3, name: "List name 3", done: true},
        {id: 4, name: "List name 4", done: false}
    ])

    return (
        <>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>

            <p>Всего элементов: {items.length}</p>
            <p>Выполненных: {items.filter(item => item.done).length}</p>
        </>
    )
}
