import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import { UserContext } from '../../UserContext'

 const Login = () => {
	const {login} = React.useContext(UserContext)

	if(login === true) return <Navigate to="/conta" />
	return (
		<div>
			<Routes> 
				<Route path="/" element={<LoginForm/>}/>
				<Route path="criar" element={<LoginCreate/>}/>
				<Route path="perdeu" element={<LoginPasswordLost/>}/>
				<Route path="resetar" element={<LoginPasswordReset/>}/>
			</Routes>
			Login
		</div>
	)
}

export default Login