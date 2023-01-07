import style from './Product.module.scss'
import { ProductCard } from './ProductCard'

export function ProductsGrid() {
    return (
        <div className={style.catalog}>
            <div className={style.catalog__filters}></div>
            <div className={style.catalog__grid}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className={style.catalog__pagination}></div>
        </div>
    )
}