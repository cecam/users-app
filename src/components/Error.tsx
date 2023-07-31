import { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'

const ErrorPage: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='text-center'>
				<h1 className='text-4xl font-semibold text-red-500 mb-4'>¡Error!</h1>
				<p className='text-2xl text-gray-400 font-semibold'>{error.message}</p>
				<button
					onClick={resetErrorBoundary}
					className='bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded-md font-semibold mt-5'
				>
					Recargar
				</button>
			</div>
		</div>
	)
}

export default ErrorPage
