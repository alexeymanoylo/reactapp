import {useState} from "react";

export function SearchList () {
    const [products] = useState([
        {id: 1, title: 'Apple'},
        {id: 2, title: 'Banana'},
        {id: 3, title: 'Avocado'},
    ])

    const [query, setQuery] = useState('')
    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search product..."/>
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