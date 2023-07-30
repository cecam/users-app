import { createContext, useState } from 'react'
import { User } from '../types/userTypes'

export const CurrentUserContext = createContext({})

const CurrentUserProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null)

	return (
		<CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</CurrentUserContext.Provider>
	)
}

export default CurrentUserProvider
