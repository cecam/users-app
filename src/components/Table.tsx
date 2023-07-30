import { FC } from 'react'
import { User } from '../types/userTypes'
import Button from './Button'

interface TableProps {
	users: User[]
	tableColor: boolean
	deleteUsers: (id: string) => void
}

const Table: FC<TableProps> = ({ users, tableColor, deleteUsers }) => {
	return (
		<div className='w-full grid place-items-center'>
			<table className='w-[90%] md:w-3/4 '>
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Name</th>
						<th>Lastname</th>
						<th>Country</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody
					className={`${
						tableColor
							? '[&>*:nth-child(odd)]:bg-[#767676] [&>*:nth-child(even)]:bg-gray-400'
							: 'bg-[#767676]'
					}`}
				>
					{users.map((user) => (
						<tr key={user.login.uuid}>
							<td className='text-center'>
								<img
									src={user.picture.thumbnail}
									alt={`${user.name.first} ${user.name.last}`}
								/>
							</td>
							<td className='text-center'>{user.name.first}</td>
							<td className='text-center'>{user.name.last}</td>
							<td className='text-center'>{user.location.country}</td>
							<td className='text-center'>
								<Button onClick={() => deleteUsers(user.login.uuid)}>
									Delete
								</Button>
								<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
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
