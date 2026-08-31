import {useState, useEffect} from "react";

export function CountdownTimer () {
    // seconds — оставшееся время. running — идёт ли отсчёт (флаг паузы).
    const [seconds, setSeconds] = useState(10)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        // Если не запущено — эффект ничего не делает (пауза).
        if (!running)
            return
        // e => e - 1 — функциональное обновление: берём актуальное значение секунд.
        const id = setInterval(() => setSeconds(e => e - 1), 1000)
        return () => clearInterval(id)
        // [running] — эффект перезапускается при старте/паузе.
    },[running])

    return(
        <>
            {/* onClick ждёт ФУНКЦИЮ. Стрелка () => setRunning(...) вызовется при КЛИКЕ. */}
            <button type="button" onClick={() => setRunning(true)}>Start</button>
            <button type="button" onClick={() => setRunning(false)}>Pause</button>
            {/* Reset — возвращаем 10 секунд и ставим на паузу. */}
            <button type="button" onClick={() => {setSeconds(10); setRunning(false)}}>Reset</button>
            <p>Seconds: {seconds}</p>
            {/* Тернарник: текст зависит от флага running. */}
            <p>Status: {!running ? 'Paused' : 'Running'}</p>
        </>
    )
}