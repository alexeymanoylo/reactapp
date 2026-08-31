import {useState, useEffect} from "react";

export function Clock () {
    // time — строка с текущим временем. Начальное значение берём сразу при первом рендере.
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        // setInterval раз в секунду кладёт новое время в state — компонент перерисовывается.
        // clearInterval в «очистке» эффекта — иначе таймеры накапливались бы при каждом рендере.
        const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
        return () => clearInterval(id)
    }, [])

    // {time} — «островок JS» в JSX: выводим текущее время
    return <div>{time}</div>
}