import { useState } from 'react'

export function ProductList () {
    const [items, setItems] = useState([
        { id: 1, name: "Apples" },
        { id: 2, name: "Oranges" }
    ])

    function addItem() {
        setItems([...items, {id: items.length + 1, name: "New Product"}])
    }

    function removeItem(id) {
        setItems(items.filter(item => item.id !== id))
    }

    return (
        <>
            <button type="button" onClick={addItem}>Add Product</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button type="button" onClick={() => removeItem(item.id)}>x</button>
                    </li>
                ))}
            </ul>
        </>
    )
}