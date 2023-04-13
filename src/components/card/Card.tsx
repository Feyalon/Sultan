import { IProduct } from './../../models';
import React, {FC, useState, useEffect} from 'react'
import "./card.css"
import {useDispatch}  from 'react-redux'
import { addToCart } from '../../store/cart/actions'
import { Link } from 'react-router-dom';

import axios from 'axios';
interface ProductProps {
    product: IProduct,
    onDeleteClick: (idx: number) => void,
}
const Card: FC<ProductProps> = ({product, onDeleteClick}) =>{
    const dispatch = useDispatch()
	const addHandler = () => {
		dispatch(addToCart(product))
        console.log(product)
	}
    const onChangeDeleteClick = (i: any) => {
        onDeleteClick(i)

    }
   
    
    
    return(
            <div className="card-main" key={product.code}>
            
                
                        <div className="card-image">
                            <img src={product.imagePath} alt="" />

                        </div>
                        <br />
                        <div className="card-header">
                            <p>
                                {product.size}
                            </p>
                            <Link to={`/${product.id}`}>
                                <h1>
                                    {product.name}
                                </h1>
                            </Link>
                            
                        </div>
                        
                        <div className="card-content">
                            <p>
                                Штрихкод: {product.code}
                            </p>
                            <p>
                            Производитель: {product.producedby}
                            </p>
                            <p>
                            Бренд: {product.brand}
                            </p>
                        </div>
                        <div className="card-footer">
                            <p className="price">
                                {product.price} ₸
                            </p>
                            <button className='card-button' onClick={() => addHandler()}>
                                В корзину
                            </button>
                        </div>
                        <div className="card-admin">
                            <p>Админ панель</p>
                            <div>
                                <button className='card-admin-button' onClick={() => onChangeDeleteClick(product.id)}>
                                    Удалить
                                </button>
                                <Link to={`edit/${product.id}`}>
                                    <button className='card-admin-button'>
                                        Редактировать
                                    </button>
                                </Link>
                                <button className='card-admin-button addProduct'>
                                    <a href="/adminpanel">
                                        Добавить продукт
                                    </a>
                                </button>
                            </div>
                        </div>
                

            </div>
    )
}

export default Card;