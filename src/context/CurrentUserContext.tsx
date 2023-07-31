import { createContext, useState, ReactNode } from 'react'
import { User } from '../types/userTypes'

interface CurrentUserContextProps {
	currentUser: User | null
	setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const CurrentUserContext = createContext<CurrentUserContextProps>({
	currentUser: null,
	setCurrentUser: () => null,
})

const CurrentUserProvider = ({ children }: { children: ReactNode }) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null)

	return (
		<CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</CurrentUserContext.Provider>
	)
}

export default CurrentUserProvider
