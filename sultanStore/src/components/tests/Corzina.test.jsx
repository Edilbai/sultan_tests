import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Corzina from '../../pages/Corzina'
import axios from 'axios'
import { MemoryRouter } from 'react-router-dom'
axios.get = jest.fn()
describe('CardItem', () => {
	it('fetches data and renders correctly', async () => {
		const mockData = {
			url: './photos/img17.png',
			firma: 'AOS ',
			name: 'Пилки разноцветные',
			size: '155мм',
			shtrihkod: '160920031017',
			price: '3000 ₸',
			type: 2,
			id: '0',
		}

		await axios.get.mockReturnValue(() => Promise.resolve({ data: mockData }))(
			() => {
				render(
					<MemoryRouter>
						<Corzina />
					</MemoryRouter>
				)
				// expect(getByText('Загрузка!!!')).toBeInTheDocument()
				expect(axios.get).toHaveBeenCalledWith(
					'https://64218b3486992901b2b62554.mockapi.io/corzina'
				)
				expect(getByText(mockData.name)).toBeDefined()
				// expect(getByText(`Штрихкод: ${mockData.shtrihkod}`)).toBeInTheDocument()
			}
		)()
	})
})
