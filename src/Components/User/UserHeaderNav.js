import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import {UserContext} from '../../UserContext'
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg'
import {ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg'
import {ReactComponent as AdicionarFoto} from '../../Assets/adicionar.svg'
import {ReactComponent as Sair} from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
	const mobile = useMedia('(max-width: 40rem)')
	const {userLogout} = React.useContext(UserContext)
	const [mobileMenu, setMobileMenu] = React.useState(false)

	const {pathname} = useLocation()
	React.useEffect(() => {
		setMobileMenu(false)
	}, [pathname])

	return (
		<> 
			{mobile && 
				<button 
					aria-label="Menu" 
					onClick={() => setMobileMenu(!mobileMenu)}
					className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
					
				>
				</button>
			}
			<nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
		</>
	)
}

export default UserHeaderNav
