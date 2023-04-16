import React from 'react'

import '../main.css'
import './Header2.css'
import { Link } from 'react-router-dom'

const Header2 = () => {
	return (
		<div className='header2'>
			<div className='d-flex space-b header2_wrapper'>
				<div className='burger_menu'>
					<img src='./img/icons/burger.png' className='brg' />{' '}
				</div>
				<img height={66} src='./photos/logoSult.png' alt='' />
				<button className='buttons kat_btn'>Каталог</button>
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
				<div className='d-flex header_2'>
					<div className='d-flex column al-end'>
						<b>+7 (777) 490-00-91</b>
						<span>время работы: 9:00-20:00</span>
						<u>Заказать звонок</u>
					</div>
					<img width={74} src='./photos/girl.png' alt='' />
				</div>
				<button className='buttons kat_btn'>Прайс-лист</button>
				<div className='d-flex al-center'>
					<Link to='/corzina'>
						<img
							className='korzina'
							width={40}
							height={28}
							src='./img/icons/korzina.png'
							alt=''
						/>
					</Link>
					<div className='d-flex column korzina_1'>
						<span>Корзина</span>
						<b>12 478 ₸ </b>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header2
