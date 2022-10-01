import { Region } from "./regions"

type Currencies = {
	code: string,
	name: string, 
	symbol: string
}
type Langueage = {
	name: string,
	nativeName: string
}
export type Country = {
	name: string,
	capital: string, 
	subregion: string,
	region: Region ,
	population: number,
	nativeName: string,
	flags : [
		svg: string,
		png: string
	],
	flag: string,
	currencies: Currencies[],
	langueages: Langueage[],
	borderd: string[],
	topLevelDomain: string[]
}