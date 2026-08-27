import {useState} from "react";

function CounterDisplay({count}) {
    return <p>Count: {count}</p>
}

function CounterButton({onIncrement}) {
    return <button onClick={onIncrement}>Increment</button>
}

export function LiftedCounter() {
    const [count, setCount] = useState(0)

    return (
        <>
            <CounterDisplay count={count}/>
            <CounterButton onIncrement={() => setCount(count + 1)}/>
        </>
    )
}