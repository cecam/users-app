import { FC, useContext } from 'react'
import { User } from '../types/userTypes'

import { CurrentUserContext } from '../context/CurrentUserContext'

import Button from './Button'

interface TableProps {
	users: User[]
	tableColor: boolean
	deleteUsers: (id: string) => void
}

const Table: FC<TableProps> = ({ users, tableColor, deleteUsers }) => {
	const { setCurrentUser } = useContext(CurrentUserContext)

	return (
		<div className='w-full grid place-items-center'>
			<table className='w-[90%] md:w-3/4 '>
				<thead className='text-white'>
					<tr>
						<th>Avatar</th>
						<th onClick={() => sortUsersByHeaders('name.first')}>Name</th>
						<th
							onClick={() => sortUsersByHeaders('name.first')}
							className='hidden md:block'
						>
							Lastname
						</th>
						<th onClick={() => sortUsersByHeaders('name.first')}>Country</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody
					className={`${
						tableColor
							? '[&>*:nth-child(odd)]:bg-[#767676] [&>*:nth-child(even)]:bg-gray-400'
							: 'bg-transparent'
					}`}
				>
					{users.map((user) => (
						<tr key={user.login.uuid} className='text-white'>
							<td className='text-center'>
								<img
									src={user.picture.thumbnail}
									alt={`${user.name.first} ${user.name.last}`}
								/>
							</td>
							<td className='text-center'>{user.name.first}</td>
							<td className='text-center hidden md:block'>{user.name.last}</td>
							<td className='text-center'>{user.location.country}</td>
							<td className='text-center flex justify-evenly md:block'>
								<Button onClick={() => deleteUsers(user.login.uuid)}>
									Delete
								</Button>
								<button
									onClick={() => setCurrentUser(user)}
									className='bg-blue-500 hover:bg-blue-700 text-white md:hidden py-1 px-4 rounded-md font-semibold'
								>
									View
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table
