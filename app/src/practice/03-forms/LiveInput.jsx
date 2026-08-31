import {useState} from "react";

export function LiveInput () {
    // text хранится В STATE, а не в DOM — это «контролируемый инпут».
    const [text, setText] = useState('')

    return (
        <>
            {/* value={text}: инпут показывает то, что лежит в state.
                onChange: при каждом вводе кладём e.target.value (набранный текст) в state.
                Без onChange инпут стал бы read-only, т.к. React «владеет» значением. */}
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Type text..."/>
            {/* text.length > 0 && ... — блок виден только когда что-то введено (не пустая строка) */}
            {text.length > 0
                && <p>Message: {text} Message length: {text.length}</p>
            }
        </>
    )
}