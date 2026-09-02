import {useState, useEffect} from "react";

export function PostById () {
    // id — какой пост грузим (меняется кнопками). post — ОДИН объект, null пока не приехал!
    const [id, setId] = useState(1)
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Зависимость [id]: эффект перезапускается при смене id (новый запрос).
    useEffect(() => {
        // AbortController — отмена предыдущего запроса при переключении id (Тема 9).
        const controller = new AbortController()

        async function load () {
            setLoading(true)  // при смене id снова показываем «Loading…»

            try {
                // ${id} — подставляем текущий id в URL (шаблонная строка).
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {signal: controller.signal})
                if (!res.ok) throw new Error('HTTP: ' + res.status)
                setPost(await res.json())  // тут ОДИН объект, не массив
            } catch (err) {
                if (err.name !== 'AbortError') setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        load()
        return () => controller.abort()
    }, [id])

    return(
        <>
            {/* Prev — защита от минуса, как SafeCounter (id не уходит в 0/отрицательные) */}
            <button type="button" onClick={() => setId(id > 1 ? id -1 : 1)}>Prev</button>
            <button type="button" onClick={() => setId(id + 1)}>Next</button>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {/* post && — обязательно! post null ДО загрузки, иначе post.title упадёт (null.title) */}
            {!loading && !error && post && (
                <div>
                    <br/>
                    <div>Post ID: {id}</div>
                    <h3>
                        {post.title}
                    </h3>
                    <div>
                        {post.body}
                    </div>
                </div>
            )}
        </>
    )
}