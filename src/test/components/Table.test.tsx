import { render, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

import Table, { TableProps } from '../../components/Table'

// Dummy user data for testing
const users: TableProps['users'] = [
	{
		gender: 'female',
		name: {
			title: 'Ms',
			first: 'John',
			last: 'Doe',
		},
		location: {
			street: {
				number: 4358,
				name: 'Rua Minas Gerais ',
			},
			city: 'Niterói',
			state: 'Rondônia',
			country: 'USA',
			postcode: 10538,
			coordinates: {
				latitude: '-79.0412',
				longitude: '171.2049',
			},
			timezone: {
				offset: '-9:00',
				description: 'Alaska',
			},
		},
		email: 'sara.mendes@example.com',
		login: {
			uuid: '1',
			username: 'happymeercat500',
			password: 'goth',
			salt: 'dQ6nfuPc',
			md5: 'e2d56b7245f13ab9da22015917e8dedd',
			sha1: '138448a20d1ebe810819ddb28610b9e64880cd06',
			sha256:
				'439dd9f5259198a5793b151111dcfc5b3b9188a96814ee789bb8e7832fbc41ae',
		},
		dob: {
			date: '1998-01-05T03:57:10.313Z',
			age: 25,
		},
		registered: {
			date: '2004-12-18T14:07:20.014Z',
			age: 18,
		},
		phone: '(93) 2432-1691',
		cell: '(70) 2408-5126',
		id: {
			name: 'CPF',
			value: '104.591.282-34',
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/women/88.jpg',
			medium: 'https://randomuser.me/api/portraits/med/women/88.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/women/88.jpg',
		},
		nat: 'BR',
	},
	{
		gender: 'female',
		name: {
			title: 'Ms',
			first: 'Celso',
			last: 'Cardenas',
		},
		location: {
			street: {
				number: 4358,
				name: 'Rua Minas Gerais ',
			},
			city: 'Niterói',
			state: 'Rondônia',
			country: 'Mexico',
			postcode: 10538,
			coordinates: {
				latitude: '-79.0412',
				longitude: '171.2049',
			},
			timezone: {
				offset: '-9:00',
				description: 'Alaska',
			},
		},
		email: 'sara.mendes@example.com',
		login: {
			uuid: '2',
			username: 'happymeercat500',
			password: 'goth',
			salt: 'dQ6nfuPc',
			md5: 'e2d56b7245f13ab9da22015917e8dedd',
			sha1: '138448a20d1ebe810819ddb28610b9e64880cd06',
			sha256:
				'439dd9f5259198a5793b151111dcfc5b3b9188a96814ee789bb8e7832fbc41ae',
		},
		dob: {
			date: '1998-01-05T03:57:10.313Z',
			age: 25,
		},
		registered: {
			date: '2004-12-18T14:07:20.014Z',
			age: 18,
		},
		phone: '(93) 2432-1691',
		cell: '(70) 2408-5126',
		id: {
			name: 'CPF',
			value: '104.591.282-34',
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/women/88.jpg',
			medium: 'https://randomuser.me/api/portraits/med/women/88.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/women/88.jpg',
		},
		nat: 'BR',
	},
	{
		gender: 'female',
		name: {
			title: 'Ms',
			first: 'Cristina',
			last: 'Brazas',
		},
		location: {
			street: {
				number: 4358,
				name: 'Rua Minas Gerais ',
			},
			city: 'Niterói',
			state: 'Rondônia',
			country: 'Brazil',
			postcode: 10538,
			coordinates: {
				latitude: '-79.0412',
				longitude: '171.2049',
			},
			timezone: {
				offset: '-9:00',
				description: 'Alaska',
			},
		},
		email: 'sara.mendes@example.com',
		login: {
			uuid: '3',
			username: 'happymeercat500',
			password: 'goth',
			salt: 'dQ6nfuPc',
			md5: 'e2d56b7245f13ab9da22015917e8dedd',
			sha1: '138448a20d1ebe810819ddb28610b9e64880cd06',
			sha256:
				'439dd9f5259198a5793b151111dcfc5b3b9188a96814ee789bb8e7832fbc41ae',
		},
		dob: {
			date: '1998-01-05T03:57:10.313Z',
			age: 25,
		},
		registered: {
			date: '2004-12-18T14:07:20.014Z',
			age: 18,
		},
		phone: '(93) 2432-1691',
		cell: '(70) 2408-5126',
		id: {
			name: 'CPF',
			value: '104.591.282-34',
		},
		picture: {
			large: 'https://randomuser.me/api/portraits/women/88.jpg',
			medium: 'https://randomuser.me/api/portraits/med/women/88.jpg',
			thumbnail: 'https://randomuser.me/api/portraits/thumb/women/88.jpg',
		},
		nat: 'BR',
	},
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
