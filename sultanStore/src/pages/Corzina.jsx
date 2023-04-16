import React, { useMemo, useState } from 'react'
import Lenta from '../components/Lenta'
import '../main.css'
import axios from 'axios'
import { useEffect } from 'react'

const Corzina = ({ corzina }) => {
	const [buy, setBuy] = useState([])
	useMemo(() => {
		axios
			.get('https://64218b3486992901b2b62554.mockapi.io/corzina')
			.then(res => {
				setBuy(res.data)
			})
	}, [])

	const remove = id => {
		axios.delete(`https://64218b3486992901b2b62554.mockapi.io/corzina/${id}`)
		setBuy(prev => prev.filter(item => item.id !== id))
	}
	const zakaz = () => {
		setBuy([])
		alert('Спасибо за заказ!!!')
	}
	const [count, setCount] = useState(1)
	return (
		<div data-testid='cor-p'>
			<Lenta />
			<div>
				{buy &&
					buy.map(obj => (
						<div
							data-testid='cards'
							className='d-flex korzina_card'
							key={obj.id}
						>
							<img
								width={225}
								height={235}
								className='img_card'
								src={obj.url}
								alt=''
							/>
							<div className='w700'>
								<span>{obj.size}</span>
								<h3>
									{obj.firma}
									{obj.name}
								</h3>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
									illum at illo veniam ratione sunt, adipisci voluptas hic.
									Aperiam et voluptate provident, iste voluptatum iure
									temporibus ut accusamus voluptas rerum?{' '}
								</span>
							</div>
							<div className='d-flex space-e al-center w70'>
								{' '}
								<button
									onClick={() => setCount(count - 1)}
									className='buttons h40'
								>
									-
								</button>
								<div>{count}</div>
								<button
									onClick={() => setCount(count + 1)}
									className='buttons h40'
								>
									+
								</button>
							</div>
							<div className='d-flex space-e al-center w70 '>
								<h3>{obj.price}</h3>
								<button onClick={() => remove(obj.id)} className='buttons h40'>
									<img
										width={15}
										height={15}
										src='./img/icons/korzina3.png'
										alt=''
									/>
								</button>
							</div>
						</div>
					))}
			</div>

			<hr></hr>
			<button onClick={() => zakaz()} data-testid='btn_del' className='buttons'>
				Оформить заказ
			</button>
		</div>
	)
}

export default Corzina
