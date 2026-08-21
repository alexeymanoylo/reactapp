import { useState } from 'react'
export function Toggle() {
    const [isToggled, setIsToggled] = useState(false)

    return (
        <button type="button" onClick={() => setIsToggled(!isToggled)}>
            {isToggled ? 'Скрыть' : 'Показать'}
        </button>
    )
}