import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../Api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import { PhotoContent } from '../Photo/PhotoContent'

const FeedModal = ({photo, setModalPhoto}) => {
	const {error, loading, data, request} = useFetch()

	React.useEffect(() => {
		const {url, options} = PHOTO_GET(photo.id)
		request(url, options)
	}, [photo, request])

	function handleOutsideClick(event){
		if(event.target === event.currentTarget) setModalPhoto(null)
	}

	return (
		<div className={styles.modal} onClick={handleOutsideClick}>
			{error &&  <Error error={error} /> }
			{loading && <Loading /> }
			{data && <PhotoContent data={data}/> }
		</div>
	)
}

export default FeedModal
