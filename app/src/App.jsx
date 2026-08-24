import './App.css'
import {useState} from "react";

function App() {
    const [cart,setCart] = useState([])

    const addToCart= (title, price) => {
        setCart([...cart, {title, price}])
    }

    return (
        <div className="shop">
            123123
        </div>
    )
}

export default App
