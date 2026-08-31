import {useState} from "react";

// Дочка-инпут: value + onChange приходят сверху. Сама ничего не хранит.
function NameInput({value, onChange}) {
    return <input type="text" value={value} onChange={onChange}/>
}

// Дочка-дисплей: получает name и показывает.
function NameDisplay({name}) {
    return <p>Hello {name}</p>
}

export function LiftedName() {
    // Состояние поднято сюда — обе дочки зависят от него.
    const [name, setName] = useState('')

    return(
        <>
            {/* ВАЖНО: onChange здесь — это ССЫЛКА на функцию setName (через стрелку),
                а не вызов. Дочка просто пробрасывает её в свой <input>. */}
            <NameInput value={name} onChange={e => setName(e.target.value)}/>
            <NameDisplay name={name}></NameDisplay>
        </>
    )
}