import {useParams} from 'react-router-dom'
import {FC, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import { IProduct } from './../../models';
import "./singlepageproduct.css"
import Quantity from '../../components/quantity/Quantity';
import { addToCart } from '../../store/cart/actions'


export function SinglePageProduct(){
    const [items, setitems] = useState<any[]>([]);
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
	
    const {name} = useParams()
    useEffect(() => {
        fetch(`http://localhost:4000/products/?id=${name}`)
                    .then((response) =>  response.json())
                    .then((json) => {
                        setitems(json)

        });
                
    
    }, [name])
    return(
        <div className="singlepage">
            {items.map((obj) => (
                <div className="singlepage-card-product">
                    <img className="singlepage-card-product-image" src={obj.imagePath} alt="" />
                    
                    <div className="singlepage-card-product-content">
                        <h1>
                            <b>{obj.brand}</b> {obj.name}
                        </h1>
                        <p>{obj.size}</p>

                        <div className="singlepage-purschases">
                            <h2>
                                <b>
                                    {obj.price}
                                </b>
                            </h2>
                            <Quantity count={count} setCount={setCount}/>
                            <button className='card-button' data-testid="basketadd">
                                В корзину
                            </button>
                        </div>
                        <div className="characterstic">
                            <p>
                                Производитель: {obj.producedby}
                            </p>
                            <p>
                                Бренд: {obj.brand}
                            </p>
                            <p>
                                Штрихкод: {obj.code} 
                            </p>
                        </div>
                        <div className="description">
                            <h2>
                                Описание
                            </h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit beatae debitis maiores rerum eum mollitia consequatur minus quae! Reiciendis, exercitationem voluptatibus quasi quo optio sunt commodi suscipit aliquam delectus accusamus?</p>
                        </div>
                        <div className="full-charastics">   
                            <ul>
                                <li>
                                   Тип {obj.name}
                                </li>
                                <li>
                                   Назначение: {obj.name}
                                </li>
                                <li>
                                    Производитель: {obj.producedby}
                                </li>
                                <li>
                                    Бренд: {obj.brand}
                                </li>
                                <li>
                                    Артикул: {obj.code}
                                </li>
                                <li>
                                    Штрихкод: {obj.code}
                                </li>
                                <li>
                                    Вес {obj.size}
                                </li>
                                <li>
                                    Объём {obj.size}
                                </li>
                                <li>
                                    Кол-во в коробке {obj.size}
                                </li>
                            </ul>
                        </div>
                    </div>
                    

                </div>
            ))}
        </div>
    )
}