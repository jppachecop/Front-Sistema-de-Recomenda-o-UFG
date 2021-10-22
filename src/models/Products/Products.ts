export interface ProductsInterface {
    _id: string
    asin: string
    promotion: boolean
    promotionDiscount: number
    price: number
    imUrl: string
    categories: Array<Array<string>>
}
