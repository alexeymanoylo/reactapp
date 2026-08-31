import {useState, useEffect} from "react";

export function RepeatTimer () {
    const [delay, setDelay] = useState(1000)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const id = setInterval(() => setCount(c => c + 1), delay)
        return () => clearInterval(id)
    }, [delay])

    return(
        <>
            <p>Count: {count}</p>
            <button type="button" onClick={() => setDelay(500)}>Fast</button>
            <button type="button" onClick={() => setDelay(2000)}>Slow</button>
        </>
    )
}