import {useState} from "react";

// Дочка получает ДВА колбэка — плюс и минус.
function Actions ({onIncrement, onDecrement}) {
    return (
        <>
            <button type="button" onClick={onIncrement}>+</button>
            <button type="button" onClick={onDecrement}>-</button>
        </>
    )
}

export function LiftedActions () {
    const [count, setCount] = useState(0)

    return(
        <>
            {/* Оба действия — колбэки, меняющие state родителя.
                onDecrement защищён: не уходит в минус (count > 0 ? count - 1 : 0). */}
            <Actions onIncrement={() => setCount(count + 1)} onDecrement={() => setCount(count > 0 ? count - 1 : 0)}/>
            <p>Count: {count}</p>
        </>
    )
}