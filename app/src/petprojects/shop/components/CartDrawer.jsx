import s from './CartDrawer.module.css'
export function CartDrawer ({cart, onClose, onRemoveFromCart}) {
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const currency = cart.length && cart[0].currency

    return (
        <>
            <aside className={s.cart}>
                <button type="button" onClick={onClose} className={s.cart__close}>x</button>
                {/*<pre>{JSON.stringify(cart, null, 2)}</pre>*/}
                <h2>Product cart</h2>
                {cart.length === 0
                    ? <p>Cart is empty</p>
                    : <div>
                        {cart.map(product =>
                        <div key={product.cartItemId} className={s.product}>
                            <div className={s.image}>
                                <img src={product.img} loading="lazy" alt=""/>
                            </div>
                            <div className={s.info}>
                                <div className={s.title}>{product.title}</div>
                                <div className={s.price}>{product.currency}{product.price}</div>
                                <div className={s.size}>
                                    Size:
                                    {product.size}
                                </div>
                                <div className={s.color}>
                                    Color:
                                    {product.color}
                                </div>
                            </div>
                            <button type="button" className={s.remove} onClick={() => onRemoveFromCart(product.cartItemId)}>X</button>
                        </div>
                        )}
                        <p>Total price:{currency}{total}</p>
                    </div>
                }
            </aside>
        </>
    )
}