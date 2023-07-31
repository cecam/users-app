import { render } from '@testing-library/react'
import { vi } from 'vitest'
import Modal from '../../components/Modal'
import { CurrentUserContext } from '../../context/CurrentUserContext'
import { User } from '../../types/userTypes'

// Mock the CurrentUserContext with a test value
const testUser = {
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
		uuid: 'd9b2669c-00ae-4315-a066-97f2ef637542',
		username: 'happymeercat500',
		password: 'goth',
		salt: 'dQ6nfuPc',
		md5: 'e2d56b7245f13ab9da22015917e8dedd',
		sha1: '138448a20d1ebe810819ddb28610b9e64880cd06',
		sha256: '439dd9f5259198a5793b151111dcfc5b3b9188a96814ee789bb8e7832fbc41ae',
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
}
const setCurrentUserMock: React.Dispatch<React.SetStateAction<User | null>> =
	vi.fn()

const mockCurrentUserContext = {
	currentUser: testUser,
	setCurrentUser: setCurrentUserMock,
}

describe('Modal Component', () => {
	it('renders the modal when currentUser is provided', () => {
		const { getByText, getByAltText } = render(
			<CurrentUserContext.Provider value={mockCurrentUserContext}>
				<Modal />
			</CurrentUserContext.Provider>,
		)

		// Check if modal content is rendered
		expect(getByText('John Doe')).toBeInTheDocument()
		expect(getByText('USA')).toBeInTheDocument()
		expect(getByAltText('John Doe')).toBeInTheDocument()
	})

	it('does not render the modal when currentUser is null', () => {
		const { queryByText, queryByAltText } = render(
			<CurrentUserContext.Provider
				value={{ currentUser: null, setCurrentUser: setCurrentUserMock }}
			>
				<Modal />
			</CurrentUserContext.Provider>,
		)

		// Check if modal content is not rendered
		expect(queryByText('John Doe')).not.toBeInTheDocument()
		expect(queryByText('USA')).not.toBeInTheDocument()
		expect(queryByAltText('John Doe')).not.toBeInTheDocument()
	})
})
