import {useState} from "react";
import {PRODUCTS_LIST} from './data/Products.js'
import {ProductCard} from './components/ProductCard.jsx';
import s from './Store.module.css'
import {CartDrawer} from "./components/CartDrawer.jsx";


export function Store () {
    const [cart, setCart] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)

    const addToCart = (item) => setCart([...cart, {...item, cartItemId:crypto.randomUUID()}])
    const removeFromCart = (id) => setCart(cart.filter(item => item.cartItemId !== id))

    return (
        <>
            <header className={s.header}>
                <h3>My Store</h3>
                <button className={s.cart__btn} onClick={() => setIsCartOpen(!isCartOpen)}>🛒 Cart ({cart.length})</button>
            </header>

            {isCartOpen && <CartDrawer cart={cart} onRemoveFromCart={removeFromCart} onClose={() => setIsCartOpen(false)}/>}

            <main className={s.catalog}>
                {PRODUCTS_LIST.map(product =>
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart}/>
                )}
            </main>
        </>
    )
}