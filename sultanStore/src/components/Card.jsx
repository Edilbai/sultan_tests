import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

import '../components/Card.css'
import '../main.css'
import CardItem from '../pages/CardItem'

const Card = ({ url, firma, name, size, shtrihkod, price, id, onPlus }) => {
	const onClickPlus = () => {
		onPlus({ url, size, name, price })
	}

	return (
		<div className='card d-flex column '>
			<Link to={`/${id}`}>
				<div className='d-flex j-center'>
					<img width={172} height={184} src={url} />
				</div>
				<div className='d-flex column space-b '>
					<div>
						<p className='size'>
							<img width={9} height={15} src='./img/icons/fairy.png' />
							{size}
						</p>
					</div>
					<span className='name'>
						<b>{firma}</b> {name}
					</span>
					<span>
						<span className='size'> Штрихкод:</span> {shtrihkod}
					</span>
					<span>
						<span className='size'>Производитель:</span> {firma}
					</span>
					<span>
						<span className='size'>Бренд:</span> {firma}
					</span>
				</div>
			</Link>

			<div className='btn d-flex space-e al-center'>
				<b className='price'>{price}</b>
				<button onClick={onClickPlus} className='buttons korzina_btn '>
					В КОРЗИНУ
					<img src='./img/icons/korzina2.png' />
				</button>
			</div>
		</div>
	)
}

export default Card
