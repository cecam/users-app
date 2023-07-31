import { FC, Dispatch, SetStateAction } from 'react'
import Button from './Button'

interface IProps {
	filter: string
	setFilter: (filter: string) => void
	resetUsers: () => void
	sortByCountry: () => void
	setTableColor: Dispatch<SetStateAction<boolean>>
}

const Header: FC<IProps> = ({
	filter,
	setFilter,
	resetUsers,
	sortByCountry,
	setTableColor,
}) => {
	return (
		<header className='sticky top-0 w-full flex flex-col items-center py-5 bg-[#484949]'>
			<h1 className='text-5xl font-semibold mb-5 text-white'>Users List</h1>
			<div className='max-w-[680px] min-w-[400px] md:min-w-[550px] flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between'>
				<Button onClick={() => setTableColor((state: boolean) => !state)}>
					Color table
				</Button>
				<Button onClick={() => sortByCountry()}>Sort By Country</Button>
				<Button onClick={() => resetUsers()}>Reset</Button>
				<input
					type='text'
					placeholder='Search by country'
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
					className='outline outline-[#767676] hover:outline-white bg-gray-600 text-xs placeholder:text-[#767676] text-white py-1 px-4 rounded-md font-semibold'
				/>
			</div>
		</header>
	)
}

export default Header
