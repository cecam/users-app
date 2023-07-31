import { render, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import Modal from '../../components/Modal'
import { CurrentUserContext } from '../../context/CurrentUserContext'

// Mock the CurrentUserContext with a test value
const testUser = {
	name: { first: 'John', last: 'Doe' },
	location: { country: 'USA' },
	picture: { large: 'thumbnail-url' },
}
const setCurrentUserMock = vi.fn()

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
