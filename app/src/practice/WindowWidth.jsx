import {useState, useEffect} from "react";

export function WindowWidth () {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return(
        <>
            <p>Window width: {width}px</p>
        </>
    )
}