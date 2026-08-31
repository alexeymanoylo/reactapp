import { useState } from 'react'

export function LikeButton() {
    // Тот же паттерн, что в Counter: числовое состояние + инкремент по клику.
    const [count, setCount] = useState(0)

    return (
        <button type="button" onClick={() => setCount(count + 1)}>
            {/* Кнопка сама показывает актуальное значение count прямо в лейбле.
                onClick стрелкой, чтобы вызвать setCount при клике, а не при рендере. */}
            Like {count}
        </button>
    )
}