import { MainLayout } from '../components/global/MainLayout'
import { ProductCard } from '../components/global/Product/ProductCard'
import { ProductsGrid } from '../components/global/Product/ProductsGrid'

export default function Home() {
  return (
    <MainLayout title={'Home Page'}>
      Home Page
      <ProductsGrid />
    </MainLayout>
  )
}
