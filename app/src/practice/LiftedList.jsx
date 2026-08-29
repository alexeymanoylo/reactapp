import {useState} from "react";

// ItemForm — дочка. Есть локальный text (инпут) и объявлен пропс onAdd,
// НО связь не завершена (см. ниже — это урок на внимательность).
function ItemForm ({onAdd}) {
    const [text, setText] = useState('')

    return(
        <>
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Add item..."/>
            {/* ⚠️ ОШИБКА-УРОК:
                1) onSubmit — это событие <form>, а не <button>; на кнопке оно не сработает.
                2) onAdd НИКОГДА не вызывается → добавления не происходит. */}
            <button type="submit" onSubmit={e => e.preventDefault}>Add</button>
        </>
    )
}

export function LifterList () {
    // Состояние списка объявлено, НО не используется и не передаётся дочке.
    const [items, setItems] = useState([])

    return (
        // ⚠️ Подъём состояния НЕ завершён: <ItemForm/> вызвана БЕЗ onAdd,
        // поэтому дочка не может сообщить родителю о новом элементе.
        // Чтобы заработало, нужно примерно так:
        //   <ItemForm onAdd={text => setItems([...items, {id: items.length + 1, title: text}])} />
        <ItemForm/>
    )
}