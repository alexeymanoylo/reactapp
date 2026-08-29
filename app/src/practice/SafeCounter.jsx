import { useState } from 'react'
export function SafeCounter () {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="safe-counter">
                <button type="button" className="safe-counter__button" onClick={() => setCount(count + 1)}>+1</button>
                <span className="safe-counter__value">{count}</span>
                {/* -1 защищён: не уходит в минус (count > 0 ? count - 1 : 0).
                    Тот же приём, что в LiftedActions. */}
                <button type="button" className="safe-counter__button" onClick={() => setCount(count > 0 ? count - 1 : 0)}>-1</button>
            </div>
        </>
    )
}