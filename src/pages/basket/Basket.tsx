import "./basket.css"
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/cart/actions'
import Quantity from './../../components/quantity/Quantity';
import React, {useState} from "react";

export function Basket(){
    const dispatch = useDispatch()
    const cart = useTypedSelector(state => state.cart)
    console.log(useTypedSelector(state => state.cart))
    const [total, setTotal] = useState({
        price: useTypedSelector(state => state.cart.reduce((prev, curr) => {return +curr.price + +prev}, 0)) //return Number(prev + curr.price) }, 0)),
    })
    const [count, setCount] = useState(1)

    const removeHandler = (id: number) => {
		dispatch(removeFromCart(String(id)))
	}
    console.log(typeof(total.price))

    return(
        <>
            <div className="basket-main">
            <div className="basket-main-top-content">
                <div className="basket-main-top-content-root">
                    <a href="/">Главная </a>
                    <span data-testid="basket">
                        | Корзина
                    </span>
                </div>
                <div className="basket-main-top-content-root-hSymbol">
                    <h1>
                        Корзина
                    </h1>
                </div>
            </div>
            <div className="basket-main-top-border">

            </div>
            {cart.length > 0 ?
                cart.map(item => (
                    <div className="basket-cards">
                        <div className="basket-cards-image"><img src={item.imagePath} alt="" /></div>
                        <div className="basket-cards-content">
                            <div className="basket-header-content">
                                <p>
                                    {item.size}
                                </p>
                                <h2>
                                {item.brand} {item.name}
                                </h2>
                            
                            </div>
                            <div className="basket-right-content">
                                <Quantity count={count} setCount={setCount} />
                                <p className="price">
                                    <b>
                                        {item.price}₸
                                    </b>
                                </p>
                                <button className="deleteBasketButton" onClick={() => removeHandler(item.id)}>
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </div>
                            
                        </div>
                    </div>
                    
                ))
                :
                <div>
                    <h1>
                        Вы еще не добавили что то в корзину
                    </h1>
                </div>
            }
                <div className="basket-footer">
                    <button>
                        <a href="/purschase" data-testid="addProduct">
                            Оформить заказ
                        </a>
                    </button>
                    <p>
                        {total.price}₸
                    </p>
                </div>
            </div>
            <div className="mobile-basket">
                <div className="mobile-basket-header">
                    <h2>
                        Корзина
                    </h2>
                </div>
                <div className="mobile-basket-content">
                    {cart.length > 0 ?
                    cart.map((cart) => (
                        <div className="mobile-basket-cards">
                            <img src={cart.imagePath} alt="" />
                            <hr />
                            <div className="mobile-basket-cards-content">
                                <p>
                                    {cart.size}
                                </p>
                                <h2>
                                    {cart.name}
                                </h2>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi cumque pariatur minima nemo perspiciatis aut repellendus expedita. Consectetur, neque sapiente. Perferendis eius dolorum ut laudantium esse architecto quod ipsa dolores?
                                </p>
                                
                            </div>
                            <br />
                            <div className="mobile-basket-cards-footer">
                                
                                <Quantity count={count} setCount={setCount} />
                                <p>
                                    {cart.price} ₸
                                </p>
                                <button className="deleteBasketButton" onClick={() => removeHandler(cart.id)}>
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                                
                            </div>
                            <br />
                        </div>
                    ))
                    :
                    <h1>
                        Вы в корзину ничего не добавили
                    </h1>    
                    }
                    <br />
                    <div className="mobile-basket-footer-content">
                        <h1>
                            <b>
                                {total.price} ₸
                            </b>
                        </h1>
                        <br />
                        <button>
                            <a href="/purschase">
                                Оформить заказ
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}