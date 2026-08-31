import {useState, useEffect} from "react";

export function RepeatTimer () {
    // delay — интервал тика (мс). count — сколько раз сработал таймер.
    const [delay, setDelay] = useState(1000)
    const [count, setCount] = useState(0)

    useEffect(() => {
        // setInterval с переменным delay: меняем скорость через state.
        const id = setInterval(() => setCount(c => c + 1), delay)
        return () => clearInterval(id)
        // [delay] — эффект перезапускается при смене скорости (Fast/Slow).
    }, [delay])

    return(
        <>
            <p>Count: {count}</p>
            {/* Кнопки меняют delay — зависимость эффекта, таймер пересоздаётся. */}
            <button type="button" onClick={() => setDelay(500)}>Fast</button>
            <button type="button" onClick={() => setDelay(2000)}>Slow</button>
        </>
    )
}