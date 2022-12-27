import style from './Product.module.scss'
import Image from 'next/image'
import { useRef, useState } from 'react'
export function ProductCard() {
    const [count, setCount] = useState(1)
    const countRef = useRef(null)
    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    return (
        <div className={style.product}>
            <div className={style.product__image}>
                <Image
                    src="/assets/dvu_nitka.jpg"
                    alt="Product picture"
                    width={350}
                    height={200}
                />
            </div>

            <h2 className={style.product__name}>Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция</h2>

            <div className={style.product__properties}>
                <div>
                    <div className={style.product__properties__title}>Состав:</div>
                    <div className={style.product__properties__body}>
                        <span>Хлопок: 85%</span>
                        <span>Эластан: 15%</span>
                    </div>
                </div>

                <div>
                    <div className={style.product__properties__title}>Цена:</div>
                    <div className={style.product__properties__body}>
                        <span>от 1м 185грн/пог.м</span>
                        <span>от 10м 160грн/пог.м</span>
                        <span>от 50м(рулон) 135грн/пог.м</span>
                    </div>
                </div>
            </div>

            <div className={style.product__actions}>
                <div className={style.product__actions__cost}>
                    <div className={style.current_cost}>185 грн/м</div>
                    <div className={style.cost_actions}>
                        <div className={style.input}>
                            <input
                                type="number"
                                ref={countRef}
                                value={count}
                                onChange={() => setCount(Number(countRef.current.value))}
                            />
                            <div className={style.quntity_shifts}>
                                <button className={style.quntity_shifts__up} onClick={increase}>+</button>
                                <button className={style.quntity_shifts__down} onClick={decrease}>-</button>
                            </div>
                        </div>
                        <div className={style.total_cost}>{185 * count} UAH</div>
                    </div>
                </div>
                <button className={style.product__actions__button}>Купить</button>
            </div>
        </div>
    )
}