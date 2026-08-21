import './App.css'
import {useState} from "react";
import { ProductCard } from './components/ProductCard'
import {Cart} from "./practice/Cart.jsx";

function App() {
    const [cart,setCart] = useState([])

    const addToCart= (title, price) => {
        setCart([...cart, {title, price}])
    }

    return (
        <div className="shop">
            <header className="shop__header">
                <h1>Витрина</h1>
            </header>
            <main className="grid">
                <ProductCard title="Lorem ipsum 1" price="$777" onAdd={addToCart}/>
                <ProductCard title="Lorem ipsum 2" price="$666" onAdd={addToCart}/>
                <ProductCard title="Lorem ipsum 3" price="$999" onAdd={addToCart}/>
            </main>
            <section className="cart">
                <h2>Корзина</h2>
                {cart.length === 0
                    ? <p>Корзина пуста</p>
                    : cart.map((item, index) =>(
                        <div key={index} className="cart__item">
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                        </div>
                    ))
                }
            </section>

            <Cart/>
        </div>
    )
}

export default App
