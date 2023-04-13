import { Dispatch, SetStateAction } from 'react'

export interface IProduct{
    imagePath: string,
    name: string,
    price: number,
    category: string,
    brand: string,
    producedby: string,
    size: string,
    code: number,
    id: number
}
export interface Ifilter{
        name: string,
        category: string,
        list: string[]
}
export interface ICartItem extends IProduct {
	count: number
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>