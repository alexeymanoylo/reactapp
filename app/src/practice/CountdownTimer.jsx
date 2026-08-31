import {useState, useEffect} from "react";

export function CountdownTimer () {
    const [seconds, setSeconds] = useState(10)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        if (!running)
            return
        const id = setInterval(() => setSeconds(e => e - 1), 1000)
        return () => clearInterval(id)
    },[running])

    return(
        <>
            <button type="button" onClick={() => setRunning(true)}>Start</button>
            <button type="button" onClick={() => setRunning(false)}>Pause</button>
            <button type="button" onClick={() => {setSeconds(10); setRunning(false)}}>Reset</button>
            <p>Seconds: {seconds}</p>
            <p>Status: {!running ? 'Paused' : 'Running'}</p>
        </>
    )
}