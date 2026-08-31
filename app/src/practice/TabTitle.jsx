import {useState, useEffect} from "react";

export function TabTitle () {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])

    return (
        <>
            <button type="button" onClick={() => setCount(count + 1)}>Count +1</button>
        </>
    )
}