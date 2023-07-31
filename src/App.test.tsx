import { render, screen } from '@testing-library/react'
import App from './App'

it('renders learn react link', () => {
	render(<App />)
	const element = screen.getByText(/users list/i)
	expect(element).toBeInTheDocument()
})
