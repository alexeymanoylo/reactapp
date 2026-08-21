import {useState} from "react";

export function ToggleText () {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <button type="button" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"}
            </button>

            {isVisible && <p>Hidden text</p>}
        </>
    )
}