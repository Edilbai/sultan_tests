import React from 'react'
import { render, screen } from '@testing-library/react'
import Header2 from '../Header2'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'

describe('Header2', () => {
	test('renders the logo', () => {
		const list = [
			{ name: 'По цене 10-1', sort: 'price' },
			{ name: 'По названию Я-А', sort: 'name' },
			{ name: 'По цене 1-10', sort: '-price' },
			{ name: 'По названию А-Я', sort: '-name' },
		]
		expect(list).toContainEqual({ name: 'По цене 10-1', sort: 'price' })
	})
})
