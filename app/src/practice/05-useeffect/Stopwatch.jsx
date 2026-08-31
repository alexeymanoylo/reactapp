import {useState, useEffect} from "react";

export function Stopwatch () {
    // seconds — число секунд с начала. Значение хранится в state, не в DOM.
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        // s => s + 1 — функциональное обновление: берём ПРЕДЫДУЩЕЕ значение (s),
        // а не замыкание из рендера. Безопасно при частых тиках.
        const id = setInterval(() => setSeconds(s => s + 1), 1000)
        return () => clearInterval(id)
    }, [])

    return (
        <>
            {/* {seconds} — «островок JS» в JSX: выводим число секунд */}
            <p>Seconds elapsed: {seconds}</p>
        </>
    )
}