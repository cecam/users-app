import { render, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

import Table, { TableProps } from '../../components/Table'

// Dummy user data for testing
const users: TableProps['users'] = [
	{
		login: { uuid: '1' },
		name: { first: 'John', last: 'Doe' },
		location: { country: 'USA' },
		picture: { thumbnail: 'thumbnail-url' },
		cell: '123456789',
		dob: { age: 30, date: new Date() },
		email: 'john.doe@example.com',
		gender: 'male',
		id: { name: '', value: null },
		nat: 'US',
		phone: '987654321',
		registered: { age: 5, date: new Date() },
	},
	{
		login: { uuid: '2' },
		name: { first: 'Celso', last: 'Cardenas' },
		location: { country: 'Mexico' },
		picture: { thumbnail: 'thumbnail-url' },
		cell: '123456789',
		dob: { age: 30, date: new Date() },
		email: 'john.doe@example.com',
		gender: 'male',
		id: { name: '', value: null },
		nat: 'US',
		phone: '987654321',
		registered: { age: 5, date: new Date() },
	},
	{
		login: { uuid: '3' },
		name: { first: 'Cristina', last: 'Brazas' },
		location: { country: 'New Zeland' },
		picture: { thumbnail: 'thumbnail-url' },
		cell: '123456789',
		dob: { age: 30, date: new Date() },
		email: 'john.doe@example.com',
		gender: 'male',
		id: { name: '', value: null },
		nat: 'US',
		phone: '987654321',
		registered: { age: 5, date: new Date() },
	},
	// Add more users as needed
]

// Mock the deleteUsers function and other props as needed
const mockDeleteUsers = vi.fn()
const mockSortUsersByNames = vi.fn()
const mockSortUsersByLastName = vi.fn()
const mockSortUsersByCountry = vi.fn()

const tableProps: TableProps = {
	users,
	tableColor: true,
	deleteUsers: mockDeleteUsers,
	sortUsersByNames: mockSortUsersByNames,
	sortUsersByLastName: mockSortUsersByLastName,
	sortUsersByCountry: mockSortUsersByCountry,
}

describe('Table Component', () => {
	it('renders user data correctly', () => {
		const { getByText, getByAltText } = render(<Table {...tableProps} />)
		expect(getByText('John')).toBeInTheDocument()
		expect(getByText('Doe')).toBeInTheDocument()
		expect(getByText('USA')).toBeInTheDocument()
		expect(getByAltText('John Doe')).toBeInTheDocument()
	})

	it('calls deleteUsers when Delete button is clicked', () => {
		const { getAllByText } = render(<Table {...tableProps} />)
		const deleteButton = getAllByText('Delete')
		fireEvent.click(deleteButton[0])
		expect(mockDeleteUsers).toHaveBeenCalledTimes(1)
		expect(mockDeleteUsers).toHaveBeenCalledWith('1')
	})

	it('calls sortUsersByNames when Name column header is clicked', () => {
		const { getByText } = render(<Table {...tableProps} />)
		const nameHeader = getByText('Name')
		fireEvent.click(nameHeader)
		expect(mockSortUsersByNames).toHaveBeenCalledTimes(1)
	})

	it('calls sortUsersByLastName when Lastname column header is clicked', () => {
		const { getByText } = render(<Table {...tableProps} />)
		const lastnameHeader = getByText('Lastname')
		fireEvent.click(lastnameHeader)
		expect(mockSortUsersByLastName).toHaveBeenCalledTimes(1)
	})

	it('calls sortUsersByCountry when Country column header is clicked', () => {
		const { getByText } = render(<Table {...tableProps} />)
		const countryHeader = getByText('Country')
		fireEvent.click(countryHeader)
		expect(mockSortUsersByCountry).toHaveBeenCalledTimes(1)
	})
})
