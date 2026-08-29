import {useState} from "react";
import s from './AddProduct.module.css'

export function AddProduct () {
    // products — список добавленных товаров (state-массив)
    const [products, setProducts] = useState([])
    // value — состояние формы (объект с полями ввода)
    const [value, setValue] = useState({title: '', price: ''})

    function handleSubmit(e) {
        e.preventDefault()  // не перезагружаем страницу

        // Добавляем НОВЫЙ товар в список через spread. id генерим из длины.
        setProducts([...products, {id: products.length + 1, title: value.title, price: value.price}])
        // Сбрасываем форму — очищаем поля ввода
        setValue({title: '', price: ''})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* Поля формы контролируемые: обновляем нужное поле объекта через spread */}
                <input type="text" value={value.title} onChange={e => setValue({...value, title: e.target.value})} placeholder="Product title"/>
                <input type="text" value={value.price} onChange={e => setValue({...value, price: e.target.value})} placeholder="Product price"/>
                <button type="submit">Add product</button>
            </form>

            <ul className={s.products}>
                {/* .map рисует добавленные товары; key — уникальный id */}
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