import {useState, useEffect} from "react";

export function Clock () {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
        return () => clearInterval(id)
    }, [])

    return <div>{time}</div>
}