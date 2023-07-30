import { render, screen } from '@testing-library/react'
import App from './App'

it('renders learn react link', () => {
	render(<App />)
	const element = screen.getByText(
		/Click on the Vite and React logos to learn more/i,
	)
	expect(element).toBeInTheDocument()
})
