import {useState} from "react";

export function ShowHide () {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button type="button" onClick={() => setIsOpen(!isOpen)}>Toggle</button>
            {isOpen && <p>Hidden content</p>}
        </>
    )
}