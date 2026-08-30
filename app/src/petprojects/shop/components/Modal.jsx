import s from './Modal.module.css'
export function Modal ({product, onModalClose}) {
    return(
        <div className={s.modal__overlay}>
            <div className={s.modal}>
                <div className={s.modal__header}>
                    <h3>Product details</h3>
                    <button type="button" onClick={onModalClose} className={s.modal__close}>X</button>
                </div>
                <div className={s.modal__body}>
                    {product && (
                        <div key={product.id} className={s.product}>
                            <div className={s.product__image}>
                                <img src={product.img} alt=""/>
                            </div>
                            <div className={s.product__title}>{product.title}</div>
                            <div className={s.product__price}>{product.currency}{product.price}</div>
                            <div className={s.product__description}>{product.description}</div>
                            <div className={s.product__size}>Size: {product.size}</div>
                            <div className={s.product__color}>Color: {product.color}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}