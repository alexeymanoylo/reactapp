import {useState} from "react";

export function SubmitForm () {
    const [text, setText] = useState('')
    const [submitted, setSubmitted] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setSubmitted(text)
        setText('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={text} onChange={e => setText(e.target.value)} placeholder="Enter text..."/>
                <button type="submit">Submit</button>
                <p>Submitted: {submitted}</p>
            </form>
        </>
    )
}