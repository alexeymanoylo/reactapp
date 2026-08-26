import {useState} from "react";

export function UserForm () {
    const [value, setValue] = useState({name: '', email: ''})

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value.name} onChange={e => setValue({...value, name: e.target.value})} placeholder="Name"/>
                <input type="email" value={value.email} onChange={e => setValue({...value, email: e.target.value})} placeholder="Email"/>
                <button type="submit">Submit</button>
                <p>Name: {value.name}</p>
                <p>Email: {value.email}</p>
            </form>
        </>
    )
}