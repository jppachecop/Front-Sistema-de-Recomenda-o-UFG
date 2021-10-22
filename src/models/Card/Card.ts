export interface CardInterface {
    image: string
    title: string
    price: number
    promotion?: boolean
    discount?: number
    rating: number
    reviewCount: number
    onClick?: VoidFunction
}
