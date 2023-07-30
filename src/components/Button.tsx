import { FC, ButtonHTMLAttributes } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
	onClick?: () => void
}

const Button: FC<IProps> = ({ children, onClick }, props) => {
	return (
		<button
			onClick={onClick}
			className='bg-black text-white py-1 px-4 rounded-md font-semibold hover:outline hover:outline-[#2e84bb] transition-all duration-300'
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
