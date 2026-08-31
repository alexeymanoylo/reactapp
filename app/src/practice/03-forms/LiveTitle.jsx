import {useState, useEffect} from "react";

export function LiveTitle () {
    // text — введённый текст, хранится в state (контролируемый инпут).
    const [text, setText] = useState('')

    useEffect(() => {
        // При каждом изменении text обновляем заголовок вкладки.
        document.title = 'Typed: ' + text
    }, [text])

    return(
        <>
            {/* value={text}+onChange: инпут показывает значение из state, onChange пишет в state. */}
            <input type="text" value={text} onChange={e =>setText(e.target.value)} placeholder="Title name..."/>
            <p>You typed: {text}</p>
        </>
    )
}