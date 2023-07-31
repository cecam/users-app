import { render, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import Header from '../../components/Header'

// Dummy functions for testing
const mockSetTableColor = vi.fn()
const mockSortByCountry = vi.fn()
const mockResetUsers = vi.fn()
const mockSetFilter = vi.fn()

const headerProps = {
	filter: '',
	setFilter: mockSetFilter,
	resetUsers: mockResetUsers,
	sortByCountry: mockSortByCountry,
	setTableColor: mockSetTableColor,
}

describe('Header Component', () => {
	it('renders the header with correct elements', () => {
		const { getByText, getByPlaceholderText } = render(
			<Header {...headerProps} />,
		)

		expect(getByText('Users List')).toBeInTheDocument()
		expect(getByPlaceholderText('Search by country')).toBeInTheDocument()
	})

	it('calls setTableColor function when "Color table" button is clicked', () => {
		const { getByText } = render(<Header {...headerProps} />)
		const colorTableButton = getByText('Color table')
		fireEvent.click(colorTableButton)

		expect(mockSetTableColor).toHaveBeenCalledTimes(1)
	})

	it('calls sortByCountry function when "Sort By Country" button is clicked', () => {
		const { getByText } = render(<Header {...headerProps} />)
		const sortByCountryButton = getByText('Sort By Country')
		fireEvent.click(sortByCountryButton)

		expect(mockSortByCountry).toHaveBeenCalledTimes(1)
	})

	it('calls resetUsers function when "Reset" button is clicked', () => {
		const { getByText } = render(<Header {...headerProps} />)
		const resetButton = getByText('Reset')
		fireEvent.click(resetButton)

		expect(mockResetUsers).toHaveBeenCalledTimes(1)
	})

	it('calls setFilter function with the correct value when input value changes', () => {
		const { getByPlaceholderText } = render(<Header {...headerProps} />)
		const searchInput = getByPlaceholderText('Search by country')

		const testSearchValue = 'USA'
		fireEvent.change(searchInput, { target: { value: testSearchValue } })

		expect(mockSetFilter).toHaveBeenCalledTimes(1)
		expect(mockSetFilter).toHaveBeenCalledWith(testSearchValue)
	})
})
