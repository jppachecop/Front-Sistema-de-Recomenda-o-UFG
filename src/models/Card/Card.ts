export interface CardInterface {
    asin: string
    image: string
    title: string
    price: number
    promotion?: boolean
    discount?: number
    rating: number
    reviewCount: number
    onClick?: VoidFunction
}
