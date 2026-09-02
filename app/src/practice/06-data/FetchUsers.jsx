import {useState, useEffect} from "react";

export function FetchUsers() {
    // users — сами данные (пусто, пока не приехали).
    const [users, setUsers] = useState([])
    // loading — идёт ли загрузка (показываем «Loading…»). error — текст ошибки (null = ок).
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // AbortController — «стоп» для запроса (см. Тему 9: очистка эффекта, утечки).
        const controller = new AbortController()

        async function load() {
            setLoading(true)   // включаем индикатор ДО запроса
            setError(null)
            try {
                // await ждёт ответ сети. signal — привязываем запрос к controller.
                const res = await fetch('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
                // fetch МОЛЧИТ на 404/500 — проверяем сами!
                if (!res.ok) throw new Error('HTTP ' + res.status)
                setUsers(await res.json())  // кладём приехавший массив в state
            } catch (err) {
                // AbortError при уходе со страницы — не считаем ошибкой.
                if (err.name !== 'AbortError') setError(err.message)
            } finally {
                setLoading(false)  // гасим «Loading…» в ЛЮБОМ исходе
            }
        }

        load()

        // Очистка: отменяем «висящий» запрос при размонтировании.
        return () => controller.abort()
    }, [])  // [] — грузим один раз при появлении

    return(
        <>
            {/* loading/error — условный рендер из Темы 6, управляемый сетью */}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {/* список рисуем только когда загрузка завершена и без ошибки */}
            {!loading && !error && (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}