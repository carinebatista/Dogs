import React from 'react'
import {NavLink} from 'react-router-dom'
import {UserContext} from '../../UserContext'
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg'
import {ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg'
import {ReactComponent as AdicionarFoto} from '../../Assets/adicionar.svg'
import {ReactComponent as Sair} from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
	const [mobile, setMobile] = React.useState(null)
	const {userLogout} = React.useContext(UserContext)

	return (
		<nav className={styles.nav}>
			<NavLink to="/conta" end activeClassName={styles.active}>
				<MinhasFotos/>
				 {mobile && 'Minhas Fotos' }
			</NavLink>
			<NavLink to="/conta/estatisticas" activeClassName={styles.active}> 
				<Estatisticas/>
				{mobile && 'Estatisticas' }

			</NavLink>
			<NavLink to="/conta/postar" activeClassName={styles.active}> 
				<AdicionarFoto/>
					 {mobile && 'Adicionar Foto' }
			</NavLink>
			<button onClick={userLogout}> 
			<Sair/>
				{mobile && 'Sair' }
			</button>
		</nav>
	)
}

export default UserHeaderNav
