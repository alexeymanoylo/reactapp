import {useState} from "react";

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
            <Actions onIncrement={() => setCount(count + 1)} onDecrement={() => setCount(count > 0 ? count - 1 : 0)}/>
            <p>Count: {count}</p>
        </>
    )
}