import { useState } from 'react'
export function ResetCounter () {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="reset-counter">
                <span className="reset-counter__value">{count}</span>
                <div className="reset-counter__actions">
                    <button className="reset-counter__reset" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="reset-counter__reset" onClick={() => setCount(count - 1)}>-1</button>
                    <button className="reset-counter__reset" onClick={() => setCount(0)}>Сброс</button>
                </div>
            </div>
        </>
    )
}