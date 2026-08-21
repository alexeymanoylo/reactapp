import {useState} from "react";

export function LiveInput () {
    const [text, setText] = useState('')

    return (
        <>
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Type text..."/>
            {text.length > 0
                && <p>Message: {text} Message length: {text.length}</p>
            }
        </>
    )
}