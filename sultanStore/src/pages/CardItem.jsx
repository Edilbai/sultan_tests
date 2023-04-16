import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../main.css'
import '../components/Card.css'
import axios from 'axios'
import Lenta from '../components/Lenta'

const CardItem = () => {
	const [data, setData] = useState()
	const { id } = useParams()

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await axios.get(
					'https://64218b3486992901b2b62554.mockapi.io/cards/' + id
				)
				setData(data)
			} catch (error) {
				alert('error')
			}
		}
		fetchData()
	}, [])
	if (!data) {
		return 'Загрузка!!!'
	}

	return (
		<div>
			<Lenta />
			<div className='d-flex space-a card_item'>
				<img width={564} height={400} src={data.url} />
				<div className='d-flex column w700'>
					<h2>
						<b>{data.firma}</b>
						{data.name}
					</h2>
					<div>
						<h2>{data.price}</h2>
					</div>
					<span>
						<span className='size'> Штрихкод:</span> {data.shtrihkod}
					</span>
					<span>
						<span className='size'>Производитель:</span> {data.firma}
					</span>
					<span>
						<span className='size'>Бренд:</span> {data.firma}
					</span>
					<span className='d-flex column'>
						<b>Описание:</b>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
						interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
						vulputate feugiat massa vestibulum duis. Faucibus consectetur
						aliquet sed pellentesque consequat consectetur congue mauris
						venenatis. Nunc elit, dignissim sed nulla ullamcorper enim,
						malesuada.
					</span>
					<span className='d-flex column'>
						<b>Характеристики:</b>
						<span className='size'>Штрихкод: {data.shtrihkod}</span>
						<span className='size'>Артикул: {data.shtrihkod}</span>
						<span className='size'>Бренд: {data.shtrihkod}</span>
						<span className='size'>Производитель: {data.shtrihkod}</span>
						<span className='size'>Объём: {data.size}</span>
						<span className='size'>Вес: {data.size}</span>
						<span className='size'>Количество в коробке: {data.size}</span>
					</span>
				</div>
			</div>
		</div>
	)
}

export default CardItem
