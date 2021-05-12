import React from 'react'
import { PHOTO_DELETE } from '../../Api'
import styles from './PhotoDelete.module.css'
import useFetch from '../../Hooks/useFetch'

const PhotoDelete = ({id}) => {

	const {loading, request} = useFetch()

	async function handleClick(){
		const confirm = window.confirm('Tem certeza que deseja deletar?')
		if(confirm) {
			const {url, options} = PHOTO_DELETE(id)
			const {response} = await request(url, options)
			if(response.ok) window.location.reload()
		}	
	}

	return (
		<>
			{loading ? (	
				<button className={styles.delete} disabled> Deletar </button>
			) : (
				<button onClick={handleClick}	className={styles.delete}> Deletar</button>
			)
			}
		
		</>
	)
}

export default PhotoDelete
