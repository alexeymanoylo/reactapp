import {useState} from "react";

export function UserForm () {
    // Состояние формы — ОДИН объект со всеми полями. Удобнее, чем отдельный useState на каждое.
    const [value, setValue] = useState({name: '', email: ''})

    function handleSubmit(e) {
        // e.preventDefault() — обязательно: иначе форма перезагрузит страницу при отправке.
        e.preventDefault()
        // (здесь можно было бы что-то сделать с value, но в примере только предотвращаем перезагрузку)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* Каждый инпут контролируемый: value берём из объекта,
                    onChange обновляет ТОЛЬКО своё поле через spread {...value, name: ...}
                    (копия объекта + перезапись одного поля). */}
                <input type="text" value={value.name} onChange={e => setValue({...value, name: e.target.value})} placeholder="Name"/>
                <input type="email" value={value.email} onChange={e => setValue({...value, email: e.target.value})} placeholder="Email"/>
                <button type="submit">Submit</button>
                <p>Name: {value.name}</p>
                <p>Email: {value.email}</p>
            </form>
        </>
    )
}