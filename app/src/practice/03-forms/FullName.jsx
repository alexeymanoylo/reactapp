import {useState, useEffect} from "react";

export function FullName() {
    // first/last — контролируемые инпуты: значение берётся из state.
    const [first, setIsFirst] = useState('')
    const [last, setIsLast] = useState('')

    useEffect(() => {
        // Склеиваем имя и фамилию, кладём в заголовок вкладки.
        // [first, last] — эффект срабатывает при изменении ЛЮБОГО из полей.
        document.title = first + ' ' + last
    }, [first, last])

    return (
        <>
            {/* value={first}+onChange: инпут «управляется» React. Без onChange — read-only. */}
            <input type="text" value={first} onChange={(e) => setIsFirst(e.target.value)} placeholder="First name"/>
            <input type="text" value={last} onChange={(e) => setIsLast(e.target.value)} placeholder="Last name"/>
        </>
    )
}