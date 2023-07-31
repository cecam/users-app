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

	const sortUsersByName = () => {
		const sortedUsers = [...filteredUsers].sort((a, b) =>
			a.name.first.localeCompare(b.name.first),
		)
		setFilteredUsers(sortedUsers)
	}

	const sortUsersByLastName = () => {
		const sortedUsers = [...filteredUsers].sort((a, b) =>
			a.name.last.localeCompare(b.name.last),
		)
		setFilteredUsers(sortedUsers)
	}

	const sortUsersByCountry = () => {
		const sortedUsers = [...filteredUsers].sort((a, b) =>
			a.location.country.localeCompare(b.location.country),
		)
		setFilteredUsers(sortedUsers)
	}

	useEffect(() => {
		const newFilteredUsers = users.filter(filterByCountry)

		setFilteredUsers(newFilteredUsers)
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
		sortUsersByName,
		sortUsersByLastName,
		sortUsersByCountry,
	}
}
