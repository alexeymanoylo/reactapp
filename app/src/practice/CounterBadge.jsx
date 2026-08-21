import {useState} from "react";

export function CounterBadge () {
    const [count, setCount] = useState(0)

    return (
        <>
            <button type="button" onClick={() => setCount(count + 1)}>+</button>
            <button type="button" onClick={() => setCount(count - 1)}>-</button>
            {count > 0 && <span>{count}</span>}
        </>
    )
}