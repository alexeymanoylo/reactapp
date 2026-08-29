import {useState} from "react";

export function ToggleText () {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <button type="button" onClick={() => setIsVisible(!isVisible)}>
                {/* Текст кнопки зависит от состояния (тот же приём, что в Toggle/ShowHide) */}
                {isVisible ? "Hide" : "Show"}
            </button>

            {/* && — текст виден только когда isVisible true */}
            {isVisible && <p>Hidden text</p>}
        </>
    )
}