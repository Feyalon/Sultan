import React, { FC } from 'react'
import { TypeSetState } from '../../models'
import "./quantity.css";
interface IQuantity {
	count: number
	setCount: TypeSetState<number>
}

const Quantity: FC<IQuantity> = ({ count, setCount }) => {
	return (
		<div className='quantity'>
			<button onClick={() => count > 0 && setCount(count - 1)}>-</button>
            <p>{count}</p>
			<button onClick={() => count < 30 && setCount(count + 1)}>+</button>
		</div>
	)
}

export default Quantity