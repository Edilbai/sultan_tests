import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Corzina from '../pages/Corzina'
import Katalog from '../pages/Katalog'
import './Lenta.css'
import { useState } from 'react'

const Lenta = props => {
	return (
		<div>
			<div className='lenta'>
				<Link data-testid='main' to='/'>
					Главная
				</Link>
				<span> / </span>
				<Link data-testid='rabbish' to='/corzina'>
					Корзина
				</Link>
			</div>
		</div>
	)
}

export default Lenta
