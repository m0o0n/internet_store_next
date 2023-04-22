import style from "./Product.module.scss";
import { useEffect, useRef, useState } from 'react'
export function ProductActions({ price1, price10, price50 }) {
    const [count, setCount] = useState(1);
    const [currentCost, setCurrentCost] = useState(null);
    const countRef = useRef(null);
    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    useEffect(() => {
        count >= 10
            ? setCurrentCost(price10)
            : count >= 50
                ? setCurrentCost(price50)
                : setCurrentCost(price1);
    }, [count]);
    return (
        <div className={style.product__actions}>
            <div className={style.product__actions__cost}>
                <div className={style.current_cost}>{currentCost + " "} грн/м</div>
                <div className={style.cost_actions}>
                    <div className={style.input}>
                        <input
                            type="number"
                            ref={countRef}
                            value={count}
                            onChange={() => setCount(Number(countRef.current.value))}
                        />
                        <div className={style.quntity_shifts}>
                            <button className={style.quntity_shifts__up} onClick={increase}>
                                +
                            </button>
                            <button
                                className={style.quntity_shifts__down}
                                onClick={decrease}
                            >
                                -
                            </button>
                        </div>
                    </div>
                    <div className={style.total_cost}>{currentCost * count} UAH</div>
                </div>
            </div>
            <button className={style.product__actions__button}>Купить</button>
        </div>
    )
}