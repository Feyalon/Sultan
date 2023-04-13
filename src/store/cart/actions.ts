import { IProduct } from '../../models'
import { actionTypes } from './types'

export const addToCart = (product: IProduct) => ({
	type: actionTypes.CART_ADD_ITEM,
	payload: { product },
})

export const removeFromCart = (productId: string) => ({
	type: actionTypes.CART_REMOVE_ITEM,
	payload: productId,
})
