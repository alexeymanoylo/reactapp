import {useState} from "react";

export function ProductCatalog () {
    const [products, setProducts] = useState([
        {id: 1, title: "Banana"},
        {id: 2, title: "Potato"},
        {id: 3, title: "Tomato"},
        {id: 4, title: "Cucumber"}
    ])

    const [value, setValue] = useState({title: ''})  // состояние поля добавления
    const [query, setQuery] = useState('')           // состояние поиска

    // Производное состояние: фильтруем по query (без учёта регистра)
    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
    )

    function handleSubmit(e) {
        e.preventDefault()
        // Добавляем товар в список через spread
        setProducts([...products, {id: products.length + 1, title: value.title}])
        setValue({title: ''})  // сброс поля
    }

    return (
        <>
            {/* Инпут поиска — контролируемый */}
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search product..."/>
            <form onSubmit={handleSubmit}>
                {/* Поле добавления — обновляем поле объекта через spread */}
                <input type="text" value={value.title} onChange={e => setValue({...value, title: e.target.value})} placeholder="Product name"/>
                <button type="submit">Add</button>
            </form>
            <ul>
                {/* Показываем ОТФИЛЬТРОВАННЫЙ список, а не исходный products */}
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