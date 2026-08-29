import {useState} from "react";

export function RemoveList () {
    // Массив объектов со стабильными id.
    const [items, setItems] = useState([
        {id: 1, name: "Item 1"},
        {id: 2, name: "Item 1"},
        {id: 3, name: "Item 1"},
        {id: 4, name: "Item 1"}
    ])

    function removeItem (id) {
        // Удаление = НОВЫЙ массив без элемента с этим id (filter, НЕ splice!).
        // splice мутировал бы исходный массив — React не заметил бы изменения.
        setItems(items.filter(item => item.id !== id))
    }

    return (
        <>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        {/* Нужен аргумент item.id → оборачиваем в стрелку:
                            onClick={() => removeItem(item.id)} (иначе вызовется сразу при рендере) */}
                        <button type="button" onClick={() =>removeItem(item.id)}>x</button>
                    </li>
                ))}
            </ul>
        </>
    )
}