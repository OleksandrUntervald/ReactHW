export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: IUsersHair;
	ip: string;
	address: IUsersAddress;
	macAddress: string;
	university: string;
	bank: IUsersBank;
	company: IUsersCompany;
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: IUsersCrypto;
	role: string;
}
export interface IUsersHair {
	color: string;
	type: string;
}
export interface IUsersAddressCoordinates {
	lat: number;
	lng: number;
}
export interface IUsersAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: IUsersAddressCoordinates;
	country: string;
}
export interface IUsersBank {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
}
export interface IUsersCompanyAddressCoordinates {
	lat: number;
	lng: number;
}
export interface IUsersCompanyAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: IUsersCompanyAddressCoordinates;
	country: string;
}
export interface IUsersCompany {
	department: string;
	name: string;
	title: string;
	address: IUsersCompanyAddress;
}
export interface IUsersCrypto {
	coin: string;
	wallet: string;
	network: string;
}