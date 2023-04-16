import React from 'react'
import '../main.css'

const SecondFilter = ({ value, onClickCat }) => {
	const categorie = [
		'Уход за телом',
		'Уход за руками',
		'Уход за ногами',
		'Уход за лицом',
		'Уход за волосами',
	]
	module.exports = categorie
	return (
		<div className='d-flex space-e second_filter'>
			{categorie.map((catName, i) => (
				<div key={catName} onClick={() => onClickCat(i)} className='categor'>
					{catName}
				</div>
			))}
		</div>
	)
	module.exports = categorie
}
export default SecondFilter
