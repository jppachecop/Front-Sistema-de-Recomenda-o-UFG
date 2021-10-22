import { ProductsInterface } from './Products'

export interface ProductsStackInterface {
    divider: string
    products: ProductsInterface[]
    onClick?: VoidFunction
}
