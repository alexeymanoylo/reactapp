import {useState} from "react";

export function SubmitForm () {
    // text — то, что сейчас в инпуте
    const [text, setText] = useState('')
    // submitted — отдельное состояние для «результата» (показываем после отправки)
    const [submitted, setSubmitted] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        // Переносим значение из инпута в submitted (отдельное состояние),
        // затем очищаем поле ввода.
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