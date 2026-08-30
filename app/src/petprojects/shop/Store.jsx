import {useState} from "react";
import {PRODUCTS_LIST} from './data/Products.js'
import {ProductCard} from './components/ProductCard.jsx';
import s from './Store.module.css'
import {CartDrawer} from "./components/CartDrawer.jsx";
import {SearchBar} from "./components/SearchBar.jsx";
import {Modal} from "./components/Modal.jsx";


export function Store () {
    const [cart, setCart] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentProduct, setCurrentProduct] = useState(null)

    const addToCart = (item) => setCart([...cart, {...item, cartItemId:crypto.randomUUID()}])
    const removeFromCart = (id) => setCart(cart.filter(item => item.cartItemId !== id))
    const filtered = PRODUCTS_LIST.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    )

    const openDetails = (item) => {
        setIsModalOpen(true)
        setCurrentProduct(item)
    }

    const modalClose = () => {
        setIsModalOpen(false)
        setCurrentProduct(null)
    }

    return (
        <>
            <header className={s.header}>
                <h3>My Store</h3>
                <button className={s.cart__btn} onClick={() => setIsCartOpen(!isCartOpen)}>🛒 Cart ({cart.length})</button>
            </header>
            {isModalOpen && <Modal product={currentProduct} onModalClose={modalClose}/>}
            <div className={s.container}>
                <SearchBar search={search} onSearch={e => setSearch(e.target.value)} onClear={() => setSearch('')}/>

                {isCartOpen && <CartDrawer cart={cart} onRemoveFromCart={removeFromCart} onClose={() => setIsCartOpen(false)}/>}

                <div className={s.catalog__panel}>
                    <h2>Catalog</h2>
                    <div className={s.catalog__count}>Products: {filtered.length}</div>
                </div>
                <main className={s.catalog}>
                    {filtered.length === 0
                        ? <p>No products found</p>
                        : filtered.map(product =>
                            <ProductCard key={product.id} product={product} onAddToCart={addToCart} onOpen={openDetails}/>
                        )
                    }
                </main>
            </div>
        </>
    )
}