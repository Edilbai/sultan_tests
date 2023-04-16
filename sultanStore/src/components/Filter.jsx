import React, { useMemo } from 'react'

import './Filter.css'

export default function Filter({ value, onClickCat }) {
	const categorie = [
		{
			name: 'Уход за телом',
			first: 'Эпиляция и депиляция',
			second: 'Средства для ванны и душа',
			third: 'Скрабы, пилинги и пр.',
		},

		{
			name: 'Уход за руками',
			first: 'Увлажнение и питание',
			second: 'Мыло твердое',
			third: 'Мыло жидкое',
		},

		{
			name: 'Уход за ногами',
			first: 'Скрабы, пилинги',
			second: 'Пилки, ролики',
			third: 'Крем для ног',
		},

		{
			name: 'Уход за лицом',
			first: 'Тональные средства',
			second: 'Средства для очищения',
			third: 'Крем для лица',
		},
		{
			name: 'Уход за волосами',
			first: 'Шампуни',
			second: 'Средства для укладки',
			third: 'Средства для окрашивания волос',
		},
	]

	return (
		<div className='filter_main'>
			<div className='price_filter'>
				<h3>ПОДБОР ПО ПАРАМЕТРАМ</h3>
				<span>Цена</span>
				<div>
					<input className='price_input' placeholder='0' /> -
					<input className='price_input' placeholder='10 000' />
				</div>
			</div>
			<div className='product_filter'>
				<h3>Производитель</h3>
				<div width={263} className='d-flex space-a al-center poisk '>
					<input className='ipt' style={{ border: 0 }} placeholder='Поиск...' />
					<button className='buttons' style={{ width: 39, height: 39 }}>
						<img
							width={15}
							height={15}
							style={{ margin: 0 }}
							src='./img/icons/lupa.png'
							alt=''
						/>
					</button>
				</div>
				<div className='d-flex column'>
					<span>
						<input data-testid='AOS' type='checkbox' /> AOS
					</span>
					<span>
						<input type='checkbox' /> Dalan
					</span>
					<span>
						<input type='checkbox' /> Saveguard
					</span>
					<span>
						<input type='checkbox' /> EVELINE
					</span>
				</div>
			</div>
			<div className='d-flex column'>
				{categorie.map((catName, index) => (
					<div
						key={index}
						onClick={() => onClickCat(index)}
						className={value === index ? 'active' : '' && 'd-flex column'}
					>
						<h4 key={catName.name + 1}>{catName.name}</h4>
						<span key={catName.first + 1}>{catName.first}</span>
						<span key={catName.second + 1}>{catName.second}</span>
						<span key={catName.third + 1}>{catName.third}</span>
					</div>
				))}
			</div>
		</div>
	)
}
