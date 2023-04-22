import { MainLayout } from "../../components/global/MainLayout";
import { getOneProductThunk } from "../../store/Product/productActions";
import style from './productPage.module.scss'
import Image from "next/image";
import { ProductActions } from '../../components/global/Product/ProductActions'
import { wrapper } from "../../store/redux-store";

const Product = ({ params, product, brandsCountry }) => {
    return (
        <MainLayout>
            <div className={style.product}>
                <div className={style.product__slider}>
                    <Image
                        className={style.product__image}
                        src={`http://localhost:5000/${product.img}`}
                        alt="Product picture"
                        width={350}
                        height={260}
                    />
                </div>
                <div className={style.product__properties}>
                    <div>
                        <h2 className={style.product__properties__name}>{product.name}</h2>
                        <div>
                            <div className={style.product__properties__title}>Цена:</div>
                            <div className={style.product__properties__body}>
                                <span>от 1м {product.price1}грн/пог.м</span>
                                <span>от 10м {product.price10}грн/пог.м</span>
                                <span>от 50м(рулон) {product.price50}грн/пог.м</span>
                            </div>
                        </div>

                        <div>
                            <div className={style.product__properties__title}>Производитель:</div>
                            <div className={style.product__properties__body}>
                                <span>
                                    {
                                        brandsCountry.find(brand => brand.id == product.brandCountryId).name
                                    }
                                </span>
                            </div>
                        </div>

                        {
                            product.info.map(info => {
                                return (
                                    <div>
                                        <div className={style.product__properties__title}>{info.title}:</div>
                                        <div className={style.product__properties__body}>
                                            <span>
                                                {
                                                    info.description
                                                }
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <ProductActions price1={product.price1} price10={product.price10} price50={product.price50} />
                </div>
            </div>
        </MainLayout>

    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    ({ dispatch, getState }) =>
        async (context) => {
            await dispatch(getOneProductThunk({ id: Number(context.params.id[0]) }));
            return {
                props: {
                    params: context.params.id,
                    product: getState().Product.product,
                    brandsCountry: getState().BrandsCountry.brandsCountry
                },
            };
        }
);


export default Product;