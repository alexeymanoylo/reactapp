import { useState } from 'react'
export function Toggle() {
    // Булево состояние: useState(false). Префикс isToggled подсказывает, что это true/false (вкл/выкл).
    const [isToggled, setIsToggled] = useState(false)

    return (
        <button type="button" onClick={() => setIsToggled(!isToggled)}>
            {/* !isToggled — инверсия: каждый клик переключает значение на противоположное */}
            {isToggled ? 'Скрыть' : 'Показать'}
        </button>
    )
}