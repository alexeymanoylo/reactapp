import {useState} from "react";

export function ShowHide () {
    // isOpen — показывать ли скрытый блок. Старт — false (спрятан).
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button type="button" onClick={() => setIsOpen(!isOpen)}>Toggle</button>
            {/* && — показать блок ТОЛЬКО если isOpen === true.
                Слева условие, справа — что рендерить. Если false — ничего не выводится. */}
            {isOpen && <p>Hidden content</p>}
        </>
    )
}