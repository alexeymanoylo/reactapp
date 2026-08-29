import s from './ProductCard.module.css'
import {useState} from "react";

export function ProductCard ({product, onAddToCart}) {
    const { id, title, price, sizes, colors, currency, rating } = product;
    const [isFavorite, setIsFavorite] = useState(false)
    const [selectedSize, setSelectedSize] = useState(sizes[0])
    const [selectedColor, setSelectedColor] = useState(colors[0])

    return(
        <>
            <div className={s.card}>
                <div className={s.image}>
                    <img src={selectedColor.img} loading="lazy" alt=""/>
                    <button type="button"
                            className={`${s.favorite} ${isFavorite ? s['favorite--active'] : ''}`}
                            onClick={() => setIsFavorite(!isFavorite)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 9.13735C2 14.0002 6.01943 16.5916 8.96173 18.9111C10 19.7296 11 20.5002 12 20.5002C13 20.5002 14 19.7296 15.0383 18.9111C17.9806 16.5916 22 14.0002 22 9.13735C22 4.27441 16.4998 0.825709 12 5.50088C7.50016 0.825709 2 4.27441 2 9.13735Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
                <div className={s.title}>{title}</div>
                <div className={s.info}>
                    <div className={s.price}>{currency}{price}</div>
                    <div className={s.rating}>{rating}</div>
                </div>
                <div className={s.feature}>
                    <div className={s.feature__title}>Size</div>

                    <div className={s.sizes}>
                        {sizes.map((size, index) =>
                            <button
                                key={index}
                                type="button"
                                className={`${s.sizes__item} ${size === selectedSize ? s['sizes__item--active'] : ''}`}
                                onClick={() => setSelectedSize(size)}
                            >{size}</button>
                        )}
                    </div>
                </div>
                <div className={s.feature}>
                    <div className={s.feature__title}>Color</div>
                    <div className={s.colors}>
                        {colors.map((color, index) =>
                            <button
                                key={index}
                                type="button"
                                className={`${s.colors__item} ${color.id === selectedColor.id ? s['colors__item--active'] : ''}`}
                                style={{backgroundColor:color.hex}}
                                onClick={() => setSelectedColor(color)}
                            ></button>
                        )}
                    </div>
                </div>
                <button type="button" className={s.btn} onClick={() => onAddToCart({
                    id: id,
                    title: title,
                    price: price,
                    currency: currency,
                    size: selectedSize,
                    color: selectedColor.id,
                    img: selectedColor.img
                })}>Buy Now</button>
            </div>
        </>
    )
}