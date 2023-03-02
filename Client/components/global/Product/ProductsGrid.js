import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsThunk } from '../../../store/Products/productsActions'
import style from './Product.module.scss'
import { ProductCard } from './ProductCard'

export function ProductsGrid() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProductsThunk())
    }, [])
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