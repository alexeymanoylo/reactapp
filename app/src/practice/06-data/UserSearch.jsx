import {useState, useEffect} from "react";

export function UserSearch () {
    // users — загруженный список. loading/error — статусы загрузки. query — введённый текст поиска.
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [query, setQuery] = useState('')  // контролируемый инпут (Тема 7)

    // ПРОИЗВОДНОЕ состояние (Тема 5): фильтруем УЖЕ загруженный список на клиенте,
    // БЕЗ нового fetch. u.name — РЕАЛЬНОЕ поле API /users (не title!).
    const filtered = users.filter(u =>
        u.name.toLowerCase().includes(query.toLowerCase())
    )

    useEffect(() => {
        // AbortController — отмена «висящего» запроса при уходе (Тема 9).
        const controller = new AbortController()

        async function load() {
            try {
                // await ждёт сеть; signal связывает fetch с controller.
                const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {signal: controller.signal})
                if (!res.ok) throw new Error('HTTP: ' + res.status)
                setUsers(await res.json())
            } catch (err) {
                if (err.name !== 'AbortError') setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        load()
        return () => controller.abort()
    },[])  // [] — грузим список один раз при старте

    return(
        <div>
            {/* контролируемый инпут (Тема 7): value берётся из state, onChange пишет в state */}
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type user name..."/>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {/* пустое состояние (Тема 6): ничего не нашли по запросу */}
            {!loading && !error && (
                <ul>
                    {filtered.length === 0
                    ? <p>Users not found</p>
                    : filtered.map(user => (
                            <li key={user.id}>
                                <div>{user.name}</div>
                                <div>{user.email}</div>
                                <br/>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}