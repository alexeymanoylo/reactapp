import {useState, useEffect} from "react";

export function ProductCatalog () {
    // products — массив товаров (пусто пока не приехал). loading/error — статусы загрузки.
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        async function load() {
            try {
                // await — ждём ответ. signal связывает fetch с controller.
                const res = await fetch('https://fakestoreapi.com/products', {signal: controller.signal})
                // fetch не падает сам на 404/500 — проверяем res.ok вручную.
                if (!res.ok) throw new Error('HTTP: ' + res.status)
                setProducts(await res.json())
            } catch (err) {
                // AbortError при размонтировании игнорируем.
                if (err.name !== 'AbortError') setError(err.message)
            }finally {
                setLoading(false)  // loading гаснет при успехе И при ошибке
            }
        }

        load()
        return () => controller.abort()
    }, [])  // [] — грузим список один раз при старте (без [] был бы бесконечный цикл)

    return(
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {/* пустое состояние + список карточек (Тема 6): рисуем только без загрузки/ошибки */}
            {!loading && !error && (
                <ul>
                    {products.length === 0
                    ? <p>No products</p>
                    : products.map(product =>
                        <li key={product.id}>
                            <img src={product.image} alt={product.title} loading="lazy"/>
                            <h3>{product.title}</h3>
                            <div>${product.price}</div>
                        </li>
                        )
                    }
                </ul>
            )}
        </div>
    )
}