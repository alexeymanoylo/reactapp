import s from './ProductCard.module.css'
export function ProductCard({ title, price, onAdd }) {
    return (
        <div className={s.card}>
            <div className={s.title}>{title}</div>
            <div className={s.price}>{price}</div>
            <button type="button" className={s.button} onClick={()=>onAdd(title, price)}>Add to Cart</button>
        </div>
    )
}