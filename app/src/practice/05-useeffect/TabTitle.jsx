import {useState, useEffect} from "react";

export function TabTitle () {
    // count — число кликов, выводим его в заголовок вкладки.
    const [count, setCount] = useState(0)

    useEffect(() => {
        // Шаблонная строка ${count} подставляет актуальное значение в заголовок.
        document.title = `Count: ${count}`
    }, [count])

    return (
        <>
            {/* onClick ждёт функцию: стрелка () => setCount(...) вызовется при КЛИКЕ. */}
            <button type="button" onClick={() => setCount(count + 1)}>Count +1</button>
        </>
    )
}