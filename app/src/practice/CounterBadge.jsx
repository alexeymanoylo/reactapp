import {useState} from "react";

export function CounterBadge () {
    const [count, setCount] = useState(0)

    return (
        <>
            <button type="button" onClick={() => setCount(count + 1)}>+</button>
            <button type="button" onClick={() => setCount(count - 1)}>-</button>
            {/* Бейдж показывается ТОЛЬКО когда count > 0 (иначе && ничего не выведет).
                Так число «0» не висит лишним. */}
            {count > 0 && <span>{count}</span>}
        </>
    )
}