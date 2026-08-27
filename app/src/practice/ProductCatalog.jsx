import {useState} from "react";

export function ProductCatalog () {
    const [products, setProducts] = useState([
        {id: 1, title: "Banana"},
        {id: 2, title: "Potato"},
        {id: 3, title: "Tomato"},
        {id: 4, title: "Cucumber"}
    ])

    const [value, setValue] = useState({title: ''})
    const [query, setQuery] = useState('')

    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
    )

    function handleSubmit(e) {
        e.preventDefault()
        setProducts([...products, {id: products.length + 1, title: value.title}])
        setValue({title: ''})
    }

    return (
        <>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search product..."/>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value.title} onChange={e => setValue({...value, title: e.target.value})} placeholder="Product name"/>
                <button type="submit">Add</button>
            </form>
            <ul>
                {filtered.length === 0
                    ? <li>No products found</li>
                    : filtered.map(product =>
                        <li key={product.id}>
                            {product.title}
                        </li>
                    )
                }
            </ul>
        </>
    )
}