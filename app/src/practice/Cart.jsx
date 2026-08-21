import {useState} from "react";

export function Cart () {
    const [items, setItem] = useState([
        {id: 1, title: "Banaba", price: "10$"},
        {id: 2, title: "Chery", price: "12$"},
        {id: 3, title: "Watermelon", price: "7$"}
    ])

    function addProduct () {
        setItem([...items, {id: items.length + 1, title: "Fruit " + (items.length + 1), price: "12" + (items.length + 1) +"$"}])
    }

    function removeProduct(id) {
        setItem(items.filter(item => item.id !== id ))
    }

    return (
        <>
            <button type="button" onClick={addProduct}>Add Product</button>

            <h3>Products</h3>
            <div className="products">
                {items.map(item => (
                    <div key={item.id} className="products-item">
                        <div className="products-item__name">{item.title}</div>
                        <div className="products-item__price">{item.price}</div>
                        <button type="button" onClick={() => removeProduct(item.id)}>Remove</button>
                    </div>
                ))}
                <p>Total products: {items.length}</p>
            </div>

        </>
    )
}