import {useState} from "react";

export function Notification () {
    const [isVisible, setIsVisible] = useState(false)  // показывать ли баннер
    const [type, setType] = useState('info')           // тип баннера (влияет на текст)

    return(
        <>
            <button type="button" onClick={() => setIsVisible(!isVisible)}>Toggle banner</button>
            <button type="button" onClick={() => setType('info')}>Set to Info</button>
            <button type="button" onClick={() => setType('error')}>Set to Error</button>

            {/* && — баннер только если isVisible.
                Внутри — тернарник по type: какой текст показать. */}
            {isVisible && <div className="banner">{type === 'info' ? "Info" : "Error"} Banner</div>}
        </>
    )
}