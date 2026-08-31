import {useState, useEffect} from "react";

export function LiveTitle () {
    const [text, setText] = useState('')

    useEffect(() => {
        document.title = 'Typed: ' + text
    }, [text])

    return(
        <>
            <input type="text" value={text} onChange={e =>setText(e.target.value)} placeholder="Title name..."/>
            <p>You typed: {text}</p>
        </>
    )
}