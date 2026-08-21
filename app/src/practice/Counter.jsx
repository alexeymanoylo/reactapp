import { useState } from 'react'
export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="counter">
            <button type="button" onClick={() => setCount(count + 1)}>+</button>
            <span className="counter__number">{count}</span>
            <button type="button" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}