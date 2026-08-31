import { useState } from 'react'
export function StepCounter () {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="step-counter">
                {/* Шаг +5: прибавляем не 1, а 5. Та же идея, что у Counter, но с шагом. */}
                <button type="button" className="step-counter__button" onClick={() => setCount(count +5)}>+5</button>
                <span className="step-counter__value">{count}</span>
                <button type="button" className="step-counter__button" onClick={() => setCount(count -5)}>-5</button>
            </div>
        </>
    )
}