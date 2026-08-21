import {useState} from "react";

export function ItemList () {
    const [items, setItems] = useState([
        {id: 1, title: "Some item text"},
        {id: 2, title: "Some item text 2"},
        {id: 3, title: "Some item text 3"}
    ])

    return (
        <>
            <ul>
                {items.length === 0
                    ? <p>Cart is empty</p>
                    : items.map(item => (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}