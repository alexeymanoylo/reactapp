import {useState} from "react";

export function SummaryList () {
    // Список с флагом done у каждого.
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

            {/* ПРОИЗВОДНОЕ СОСТОЯНИЕ: значения не храним отдельно,
                а считаем ИЗ массива на каждом рендере. */}
            <p>Всего элементов: {items.length}</p>
            {/* filter отбирает выполненные, .length — их количество (как total в корзине через reduce) */}
            <p>Выполненных: {items.filter(item => item.done).length}</p>
        </>
    )
}
