export interface User {
	cell: string
	dob: Dob
	email: string
	gender: Gender
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
	date: Date
}

enum Gender {
	Female = 'female',
	Male = 'male',
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
	title: Title
}

enum Title {
	MS = 'Ms',
	Mademoiselle = 'Mademoiselle',
	Miss = 'Miss',
	Monsieur = 'Monsieur',
	Mr = 'Mr',
	Mrs = 'Mrs',
}

interface Picture {
	large: string
	medium: string
	thumbnail: string
}
