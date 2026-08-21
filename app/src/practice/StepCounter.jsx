import { useState } from 'react'
export function StepCounter () {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="step-counter">
                <button type="button" className="step-counter__button" onClick={() => setCount(count +5)}>+5</button>
                <span className="step-counter__value">{count}</span>
                <button type="button" className="step-counter__button" onClick={() => setCount(count -5)}>-5</button>
            </div>
        </>
    )
}