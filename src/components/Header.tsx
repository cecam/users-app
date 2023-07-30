import { FC, Dispatch, SetStateAction } from 'react'
import Button from './Button'

import { User } from '../types/userTypes'

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
		<header className='w-full flex flex-col items-center py-5'>
			<h1 className='text-5xl font-semibold mb-5 text-white'>Users List</h1>
			<div className='max-w-[680px] min-w-[550px] flex flex-col md:flex-row md:justify-between'>
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
					className='outline outline-[#767676] hover:outline-white px-1 py-1 bg-gray-600 text-xs placeholder:text-[#767676] text-white rounded-sm'
				/>
			</div>
		</header>
	)
}

export default Header
