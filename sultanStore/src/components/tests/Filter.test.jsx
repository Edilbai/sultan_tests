import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Filter from '../Filter'

describe('Filter component', () => {
	const mockOnClickCat = jest.fn()
	const categories = [
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
	]

	it('should render all categories', () => {
		const { getByText } = render(
			<Filter categorie={categories} onClickCat={mockOnClickCat} />
		)
		categories.forEach(cat => {
			expect(getByText(cat.name)).toBeInTheDocument()
			expect(getByText(cat.first)).toBeInTheDocument()
			expect(getByText(cat.second)).toBeInTheDocument()
			expect(getByText(cat.third)).toBeInTheDocument()
		})
	})
})
