import {useState, useEffect} from "react";

export function FullName() {
    const [first, setIsFirst] = useState('')
    const [last, setIsLast] = useState('')

    useEffect(() => {
        document.title = first + ' ' + last
    }, [first, last])

    return (
        <>
            <input type="text" value={first} onChange={(e) => setIsFirst(e.target.value)} placeholder="First name"/>
            <input type="text" value={last} onChange={(e) => setIsLast(e.target.value)} placeholder="Last name"/>
        </>
    )
}