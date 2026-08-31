import {useState} from "react";

export function ItemList () {
    // Состояние-массив: храним список объектов. У каждого — стабильный id (нужен для key).
    const [items, setItems] = useState([
        {id: 1, title: "Some item text"},
        {id: 2, title: "Some item text 2"},
        {id: 3, title: "Some item text 3"}
    ])

    return (
        <>
            <ul>
                {/* Условный рендер: пустой массив → сообщение, иначе .map по элементам */}
                {items.length === 0
                    ? <p>Cart is empty</p>
                    : items.map(item => (
                        // key ОБЯЗАТЕЛЕН и должен быть стабильным (item.id, а не index)
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}