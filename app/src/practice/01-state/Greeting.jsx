import {useState} from "react";

export function Greeting () {
    // isLoggedIn — булев флаг: вошёл пользователь или нет. Старт — false (гость).
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <>
            {/* Текст кнопки тоже зависит от состояния (тернарник) */}
            <button type="button" onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log out" : "Log in"}</button>
            {/* Условный рендер через ? : — две ветки. В React нет v-if, только JS-выражения. */}
            {isLoggedIn
                ? <h1>Welcome!</h1>
                : <p>Please log in</p>
            }
        </>
    )
}