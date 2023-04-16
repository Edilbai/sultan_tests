import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../Header'
import Lenta from '../Lenta'

describe('render Corzina', () => {
	it('to be text', () => {
		render(<Header />)
		const el = screen.getByText(/(Рынок Восточный)/i)
		expect(el).toBeInTheDocument()
	})

	it('Header snapshot', () => {
		const snap = render(<Header />)
		expect(snap).toMatchSnapshot()
	})
})
