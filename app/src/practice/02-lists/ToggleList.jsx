import {useState} from "react";
import s from './ToggleList.module.css'

export function ToggleList () {
    // Каждый элемент имеет флаг done (выполнено?).
    const [items, setItems] = useState([
        {id: 1, name: "List name 1", done: false},
        {id: 2, name: "List name 2", done: false},
        {id: 3, name: "List name 3", done: false},
        {id: 4, name: "List name 4", done: false}
    ])

    function selectItem(id) {
        // Изменение ОДНОГО элемента = map, который для нужного id возвращает КОПИЮ
        // {...item, done: !item.done}, а остальные оставляет как есть.
        // Spread {...item} копирует все старые поля + перезаписывает done. НЕ мутируем item на месте!
        setItems(items.map(item => item.id === id ? {...item, done: !item.done} : item))
    }

    return (
        <>
            <ul>
                {items.map(item =>(
                    // Класс из CSS-модуля переключаем по флагу done.
                    <li key={item.id} className={item.done ? s.done : ""}>
                        {item.name}
                        {/* Стрелка-обёртка, т.к. передаём аргумент item.id */}
                        <button type="button" onClick={() => selectItem(item.id)}>{item.done ? "Undo" : "Done"}</button>
                    </li>
                ))}
            </ul>
        </>
    )
}