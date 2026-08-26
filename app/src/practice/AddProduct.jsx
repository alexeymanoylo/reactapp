import {useState} from "react";
import s from './AddProduct.module.css'

export function AddProduct () {
    const [products, setProducts] = useState([])
    const [value, setValue] = useState({title: '', price: ''})

    function handleSubmit(e) {
        e.preventDefault()

        setProducts([...products, {id: products.length + 1, title: value.title, price: value.price}])
        setValue({title: '', price: ''})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value.title} onChange={e => setValue({...value, title: e.target.value})} placeholder="Product title"/>
                <input type="text" value={value.price} onChange={e => setValue({...value, price: e.target.value})} placeholder="Product price"/>
                <button type="submit">Add product</button>
            </form>

            <ul className={s.products}>
                {products.map(product => (
                    <li key={product.id}>
                        <div className={s.product}>
                            <div className={s.image}>
                                <img src="https://placehold.co/600x400" alt="" loading="lazy"/>
                            </div>
                            <div className={s.title}>{product.title}</div>
                            <div className={s.price}>${product.price}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}