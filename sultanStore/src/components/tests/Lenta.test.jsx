import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Lenta from './../Lenta'

describe('router', () => {
	it('router test', () => {
		const { container } = render(
			<MemoryRouter>
				<Lenta />
			</MemoryRouter>
		)

		const mainLink = screen.getByTestId('main')
		const rabbishLink = screen.getByTestId('rabbish')
		expect(mainLink.getAttribute('href')).toBe('/')
		expect(rabbishLink.getAttribute('href')).toBe('/corzina')
	})
	it('router test', async () => {
		render(
			<MemoryRouter>
				<Lenta />
			</MemoryRouter>
		)

		const mainLink = screen.getByTestId('main')
		const rabbishLink = screen.getByTestId('rabbish')
		const main_p = screen.queryByTestId('main-p')
		const cor_p = screen.queryByTestId('cor_p')
		await userEvent.click(rabbishLink)

		expect(main_p).toBeNull()
		userEvent.click(mainLink)

		expect(cor_p).toBeNull()
	})
})
