import './App.css'
import {useState} from "react";
import {Greeting} from "./practice/Greeting.jsx";
import {ItemList} from "./practice/ItemList.jsx";
import {Tabs} from "./practice/Tabs.jsx";
import {CounterBadge} from "./practice/CounterBadge.jsx";
import {Notification} from "./practice/Notification.jsx";

function App() {
    const [cart,setCart] = useState([])

    const addToCart= (title, price) => {
        setCart([...cart, {title, price}])
    }

    return (
        <div className="shop">
            <Notification/>
        </div>
    )
}

export default App
