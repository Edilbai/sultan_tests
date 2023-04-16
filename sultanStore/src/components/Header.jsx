import React from 'react'

import '../main.css'
import '../components/Header.css'

const Header = () => {
	return (
		<div className='header'>
			<div className='d-flex header_top space-b address'>
				<div className='d-flex space-b'>
					<div className='d-flex space-a al-center'>
						<img
							className='icon'
							width={13}
							height={16}
							src='./img/icons/first.png'
						/>
						<div className='d-flex address column'>
							<b>г. Кокчетав, ул. Ж. Ташенова 129Б </b>
							<span>(Рынок Восточный)</span>
						</div>
					</div>
					<div className=' d-flex space-a al-center'>
						<img
							className='icon'
							width={16}
							height={13}
							src='./img/icons/second.png'
							alt=''
						/>
						<div className='address d-flex column	'>
							<b>opt.sultan@mail.ru</b>
							<span> На связи в любое время</span>
						</div>
					</div>
				</div>

				<div className='header_top_right al-center d-flex space-b '>
					<p>О компании</p>
					<p>Доставка и оплата</p>
					<p>Возврат</p>
					<p>Контакты</p>
				</div>
			</div>
		</div>
	)
}

export default Header
