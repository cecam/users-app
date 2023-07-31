import { useEffect, useState } from 'react'

import type { User } from '../types/userTypes'

const API_URL = 'https://randomuser.me/api/?results=100'
export const useUsers = () => {
	const [filter, setFilter] = useState('')
	const [users, setUsers] = useState<User[]>([])
	const [filteredUsers, setFilteredUsers] = useState<User[]>([])

	const resetUsers = () => {
		setFilteredUsers(users)
	}

	const deleteUsers = (id: string) => {
		const newUsers = filteredUsers.filter((user) => user.login.uuid !== id)

		setFilteredUsers(newUsers)
	}

	const filterByCountry = (user: User) => {
		return user.location.country.toLowerCase().includes(filter.toLowerCase())
	}

	const sortUsersByCountry = () => {
		const sortedUsers = users.sort((a, b) => {
			if (a.location.country > b.location.country) {
				return 1
			}

			if (a.location.country < b.location.country) {
				return -1
			}

			return 0
		})

		setFilteredUsers(sortedUsers)
	}

	useEffect(() => {
		const filteredUsers = users.filter(filterByCountry)

		setFilteredUsers(filteredUsers)
	}, [filter, users])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API_URL)
				const data = await response.json()

				setUsers(data.results)
				setFilteredUsers(data.results)
			} catch (error) {
				throw new Error('Error fetching users')
			}
		}

		fetchData()
	}, [])

	return {
		filter,
		users,
		filteredUsers,
		resetUsers,
		deleteUsers,
		setFilter,
		sortUsersByCountry,
	}
}
