import { useState } from 'react'
import Header from './components/Header'
import Table from './components/Table'

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
		<>
			<Header
				filter={filter}
				setFilter={setFilter}
				resetUsers={resetUsers}
				sortByCountry={sortUsersByCountry}
				setTableColor={setTableColor}
			/>

			<Table
				users={filteredUsers}
				deleteUsers={deleteUsers}
				tableColor={tableColor}
			/>
		</>
	)
}

export default App
