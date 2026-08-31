import {useState} from "react";

export function SearchList () {
    // products — статический список: const [products] = useState([...]) без сеттера,
    // т.к. менять список не планируем (деструктурируем только первый элемент).
    const [products] = useState([
        {id: 1, title: 'Apple'},
        {id: 2, title: 'Banana'},
        {id: 3, title: 'Avocado'},
    ])

    const [query, setQuery] = useState('')  // то, что введено в поиск
    // ПРОИЗВОДНОЕ состояние: filtered считается на лету из products + query.
    // toLowerCase() у ОБЕИХ сторон — поиск без учёта регистра ("apple" найдёт "Apple").
    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <>
            {/* Контролируемый инпут поиска */}
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search product..."/>
            {/* Если ничего не нашлось — сообщение, иначе .map по отфильтрованному */}
            {filtered.length === 0
            ? <p>No products</p>
            : <ul>
                    {filtered.map(item =>
                        <li key={item.id}>{item.title}</li>
                    )}
                </ul>
            }
        </>
    )
}