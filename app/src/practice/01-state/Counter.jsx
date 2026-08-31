import { useState } from 'react'
export function Counter() {
    // useState(0): 0 — начальное значение счётчика.
    // count — текущее значение (показываем в JSX),
    // setCount — единственный способ его изменить. Менять count напрямую нельзя — React не заметит.
    const [count, setCount] = useState(0)

    return (
        <div className="counter">
            {/* onClick ждёт ФУНКЦИЮ. Стрелка () => setCount(...) — обёртка:
                вызовется при КЛИКЕ, а не сразу при отрисовке (ловушка onClick={fn()}!). */}
            <button type="button" onClick={() => setCount(count + 1)}>+</button>
            {/* {count} — «островок JS» в JSX: выводим значение переменной */}
            <span className="counter__number">{count}</span>
            <button type="button" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}