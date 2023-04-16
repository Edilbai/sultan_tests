import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Header2 from './components/Header2'
import Lenta from './components/Lenta'

import './main.css'
import CardItem from './pages/CardItem'
import Corzina from './pages/Corzina'
import Katalog from './pages/Katalog'
import { useState } from 'react'

function App() {
	return (
		<div className='App'>
			<Header />
			<Header2 />

			<Routes>
				<Route path='/' element={<Katalog />} />
				<Route path='/corzina' element={<Corzina />} />
				<Route path='/:id' element={<CardItem />} />
			</Routes>
		</div>
	)
}

export default App
