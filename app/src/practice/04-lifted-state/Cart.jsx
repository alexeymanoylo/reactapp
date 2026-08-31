import {useState} from "react";

export function Cart () {
    // state-массив товаров. Имя сеттера setItem (а не setItems) — просто naming, работает.
    const [items, setItem] = useState([
        {id: 1, title: "Banaba", price: "10$"},
        {id: 2, title: "Chery", price: "12$"},
        {id: 3, title: "Watermelon", price: "7$"}
    ])

    function addProduct () {
        // Добавление через spread — НОВЫЙ массив (не push!).
        // ⚠️ Цена тут собирается как СТРОКА ("12" + ... + "$") — работает для показа,
        // но для подсчёта суммы (как в магазине) цену лучше хранить числом.
        setItem([...items, {id: items.length + 1, title: "Fruit " + (items.length + 1), price: "12" + (items.length + 1) +"$"}])
    }

    function removeProduct(id) {
        // Удаление через filter — НОВЫЙ массив без элемента с этим id.
        setItem(items.filter(item => item.id !== id ))
    }

    return (
        <>
            <button type="button" onClick={addProduct}>Add Product</button>

            <h3>Products</h3>
            <div className="products">
                {/* .map + key (уникальный id) */}
                {items.map(item => (
                    <div key={item.id} className="products-item">
                        <div className="products-item__name">{item.title}</div>
                        <div className="products-item__price">{item.price}</div>
                        {/* Стрелка-обёртка, т.к. передаём аргумент item.id */}
                        <button type="button" onClick={() => removeProduct(item.id)}>Remove</button>
                    </div>
                ))}
                {/* Производное состояние: общее число товаров */}
                <p>Total products: {items.length}</p>
            </div>

        </>
    )
}