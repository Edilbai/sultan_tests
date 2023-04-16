import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CardItem from '../../pages/CardItem'

jest.mock('axios')

describe('CardItem render', () => {
	test('render', async () => {
		render(<CardItem />)
		const hello = await screen.findByText(/Загрузка!!!/i)
		expect(hello).toBeInTheDocument()
	})
})
