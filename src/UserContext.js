import React from 'react'
import { TOKEN_POST, USER_GET } from './api'

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
	const [data, setData] = React.useState(null)
	const [login, setLogin] = React.useState(null)
	const [loading, setloading] =React.useState(false)
	const [error, setError] = React.useState(null)


	async function getUser(token){
		const {url, options} = USER_GET(token)
		const response = await fetch(url, options)
		const json = await response.json()
		setData(json)
		setLogin(true)
	}

	async function userLogin(username, password) {
		const {url, options} = TOKEN_POST({username, password})
		const tokenRes = await fetch(url, options)
		const {token} = await tokenRes.json()
		window.localStorage.setItem('token', token)
		getUser(token)
	}

	return (
		<UserContext.Provider value={{userLogin, data}}>	
			{children}
		</UserContext.Provider>
	)
}
