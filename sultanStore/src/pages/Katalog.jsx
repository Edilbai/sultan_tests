import React, { useEffect, useState } from 'react'
import '../App.css'
import '../main.css'

import Card from '../components/Card'
import Filter from '../components/Filter'
import Sort from '../components/Sort'
import Pagination from '../components/Pagination'

import Lenta from '../components/Lenta'
import axios from 'axios'
import { useMemo } from 'react'

const Katalog = () => {
	const [katalog, setKatalog] = useState([])
	const [filter, setFilter] = useState('')
	const [pageVal, setPageVal] = useState(1)
	const [sortType, setSortType] = useState({
		name: 'По названию Я-А',
		sort: 'name',
	})

	useEffect(() => {
		const URL = 'https://64218b3486992901b2b62554.mockapi.io/cards?'
		const order = sortType.sort.includes('-') ? 'asc' : 'desc'
		const sortBy = sortType.sort.replace('-', '')
		const type = filter > 0 ? `type=${filter}` : ''

		fetch(
			`${URL}page=${pageVal}&limit=9&${type}&sortBy=${sortBy}&order=${order}`
		)
			.then(res => {
				return res.json()
			})
			.then(arr => {
				setKatalog(arr)
			})
		console.log(filter, sortType, pageVal)
	}, [filter, sortType, pageVal])

	const [item, setItem] = useState([])
	const addItems = items => {
		axios
			.post('https://64218b3486992901b2b62554.mockapi.io/corzina', items)
			.then(res => {
				setItem(res.data)
			})
	}

	return (
		<div data-testid='main-p'>
			<Lenta />
			<div>
				<Sort
					value={filter}
					onClickCat={id => setFilter(id)}
					value_sort={sortType}
					onClickSort={id => setSortType(id)}
				/>
			</div>

			<div className='d-flex'>
				<Filter value={filter} onClickCat={id => setFilter(id)} />
				<div className='d-grid card-list'>
					{katalog.map(obj => (
						<Card
							data-testid='items'
							id={obj.id}
							url={obj.url}
							firma={obj.firma}
							name={obj.name}
							size={obj.size}
							shtrihkod={obj.shtrihkod}
							price={obj.price}
							key={obj.id}
							onPlus={items => addItems(items)}
						/>
					))}
				</div>
			</div>
			<Pagination onChangePage={number => setPageVal(number)} />
		</div>
	)
}

export default Katalog
