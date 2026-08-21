import './App.css'
import {useState} from "react";
import {LiveInput} from "./practice/LiveInput.jsx";

function App() {
    const [cart,setCart] = useState([])

    const addToCart= (title, price) => {
        setCart([...cart, {title, price}])
    }

    return (
        <div className="shop">
            <LiveInput/>
        </div>
    )
}

export default App
