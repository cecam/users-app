import { useState } from 'react'

import CurrentUserProvider from './context/CurrentUserContext'

import Header from './components/Header'
import Table from './components/Table'
import Modal from './components/Modal'

import { useUsers } from './hooks/useUsers'

function App() {
	const {
		filter,
		setFilter,
		resetUsers,
		filteredUsers,
		deleteUsers,
		sortUsersByCountry,
	} = useUsers()

	const [tableColor, setTableColor] = useState<boolean>(true)

	return (
		<CurrentUserProvider>
			<Header
				filter={filter}
				setFilter={setFilter}
				resetUsers={resetUsers}
				sortByCountry={sortUsersByCountry}
				setTableColor={setTableColor}
			/>
			<div className='h-full overflow-y-auto'>
				<Table
					users={filteredUsers}
					deleteUsers={deleteUsers}
					tableColor={tableColor}
				/>
			</div>

			<Modal />
		</CurrentUserProvider>
	)
}

export default App
