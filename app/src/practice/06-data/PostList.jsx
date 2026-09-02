import {useState, useEffect} from "react";

export function PostList() {
    // posts — массив постов (пусто пока не приехал). loading/error — как в FetchUsers.
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // AbortController — отмена «висящего» запроса при уходе (Тема 9).
        const controller = new AbortController()
        async function load() {
            try {
                // await — ждём ответ. signal связывает fetch с controller.
                const res = await fetch('https://jsonplaceholder.typicode.com/posts', {signal: controller.signal})
                // fetch не падает сам на 404/500 — проверяем res.ok вручную.
                if (!res.ok) throw new Error('HTTP: ' + res.status)
                setPosts(await res.json())
            } catch (err) {
                // AbortError при размонтировании игнорируем.
                if (err.name !== 'AbortError') setError(err.message)
            }finally {
                setLoading(false)  // loading гаснет при успехе И при ошибке
            }
        }
        load()
        return () => controller.abort()
    }, [])  // [] — один раз при монтаже

    return(
        <>
            {/* условный рендер по статусу загрузки (Тема 6) */}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            <div>{post.title}</div>
                            <div>{post.body}</div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}