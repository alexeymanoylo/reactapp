import {useState, useEffect} from "react";

export function WindowWidth () {
    // width — текущая ширина окна. Начальное значение берём сразу при рендере.
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        // onResize кладёт новую ширину в state при каждом ресайзе окна.
        const onResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', onResize)
        // Очистка: снимаем слушатель, чтобы не было утечек при размонтировании.
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return(
        <>
            <p>Window width: {width}px</p>
        </>
    )
}