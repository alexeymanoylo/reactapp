import {useState} from "react";

export function Greeting () {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <>
            <button type="button" onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log out" : "Log in"}</button>
            {isLoggedIn
                ? <h1>Welcome!</h1>
                : <p>Please log in</p>
            }
        </>
    )
}