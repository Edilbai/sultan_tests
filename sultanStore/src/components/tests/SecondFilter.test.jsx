import { render, screen } from '@testing-library/react'
import SecondFilter from '../SecondFilter'

describe('SecondFilter component', () => {
	const categories = [
		'Уход за телом',
		'Уход за руками',
		'Уход за ногами',
		'Уход за лицом',
		'Уход за волосами',
	]
	test('', () => {
		render(<SecondFilter />)
	})
	test('should display correct categories', () => {
		expect(categories).toHaveLength(5)
		expect(categories[0]).toEqual('Уход за телом')
		expect(categories[1]).toEqual('Уход за руками')
		expect(categories[2]).toEqual('Уход за ногами')
		expect(categories[3]).toEqual('Уход за лицом')
		expect(categories[4]).toEqual('Уход за волосами')
	})
})
