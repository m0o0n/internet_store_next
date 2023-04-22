import style from "./Product.module.scss";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ProductActions } from './ProductActions'
import Link from "next/link";

export function ProductCard({ id, img, name, price1, price10, price50 }) {
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

  const costActions = (price1, price10, price50, count) => { };
  return (
    <div className={style.product}>
      <Image
        className={style.product__image}
        src={`http://localhost:5000/${img}`}
        alt="Product picture"
        width={350}
        height={200}
      />

      <h2 className={style.product__name}><Link href='/product/[...id]' as={`/product/${id}`}>{name}</Link></h2>

      <div className={style.product__properties}>


        <div>
          <div className={style.product__properties__title}>Цена:</div>
          <div className={style.product__properties__body}>
            <span>от 1м {price1}грн/пог.м</span>
            <span>от 10м {price10}грн/пог.м</span>
            <span>от 50м(рулон) {price50}грн/пог.м</span>
          </div>
        </div>
      </div>

      {/* <div className={style.product__actions}>
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
      </div> */}

      <ProductActions price1={price1} price10={price10} price50={price50} />
    </div>
  );
}
