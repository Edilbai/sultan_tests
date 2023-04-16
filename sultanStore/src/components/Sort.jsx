import React, { useState } from 'react'

import './Filter.css'
import '../main.css'
import SecondFilter from './SecondFilter'

export default function Sort({ value, onClickCat, onClickSort, value_sort }) {
	const [open, setOpen] = useState(false)
	const list = [
		{ name: 'По цене 10-1', sort: 'price' },
		{ name: 'По названию Я-А', sort: 'name' },
		{ name: 'По цене 1-10', sort: '-price' },
		{ name: 'По названию А-Я', sort: '-name' },
	]
	const onClickList = i => {
		onClickSort(i)
		setOpen(false)
	}

	return (
		<div className='sort'>
			<div className='d-flex space-b al-center col'>
				<h1>Косметика и гигиена</h1>
				<div className='d-flex select'>
					<b>Сортировка:</b>
					<div className='select2 d-flex column'>
						<span onClick={() => setOpen(!open)}>{value_sort.name}</span>
						{open && (
							<div>
								<ul className='pad_zero'>
									{list.map((obj, i) => (
										<li
											key={i}
											onClick={() => onClickList(obj)}
											className={value_sort.sort === obj.sort ? 'active' : ''}
										>
											{obj.name}
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
			<SecondFilter value={value} onClickCat={onClickCat} />
		</div>
	)
}
