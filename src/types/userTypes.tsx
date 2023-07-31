export interface User {
	cell: string
	dob: Dob
	email: string
	gender: string
	id: ID
	location: Location
	login: Login
	name: Name
	nat: string
	phone: string
	picture: Picture
	registered: Dob
}

interface Location {
	city: string
	coordinates: Coordinates
	country: string
	postcode: number | string
	state: string
	street: Street
	timezone: Timezone
}

interface Coordinates {
	latitude: string
	longitude: string
}

interface Street {
	name: string
	number: number
}

interface Timezone {
	description: string
	offset: string
}

interface Dob {
	age: number
	date: string
}

interface ID {
	name: string
	value: null | string
}

interface Login {
	md5: string
	password: string
	salt: string
	sha1: string
	sha256: string
	username: string
	uuid: string
}

interface Name {
	first: string
	last: string
	title: string
}

interface Picture {
	large: string
	medium: string
	thumbnail: string
}
