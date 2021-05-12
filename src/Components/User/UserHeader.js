import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
	const [title, setTitle] = React.useState("")
	const Location = useLocation()

	React.useEffect(() => {
		const { pathname } = Location;
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
    }
	}, [Location])

	return (
		<header className={styles.header}>
			<h1 className="title"> {title} </h1>
			<UserHeaderNav />
		</header>
	)
}

export default UserHeader
