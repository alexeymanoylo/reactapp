import {useState} from "react";

export function Notification () {
    const [isVisible, setIsVisible] = useState(false)
    const [type, setType] = useState('info')

    return(
        <>
            <button type="button" onClick={() => setIsVisible(!isVisible)}>Toggle banner</button>
            <button type="button" onClick={() => setType('info')}>Set to Info</button>
            <button type="button" onClick={() => setType('error')}>Set to Error</button>

            {isVisible && <div className="banner">{type === 'info' ? "Info" : "Error"} Banner</div>}
        </>
    )
}