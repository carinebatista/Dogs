import React from 'react'
import { useParams } from 'react-router-dom'
import { PHOTO_GET } from '../../Api'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from './PhotoContent'

const Photo = () => {
	const {id} = useParams()
	const {data, loading, request, error} = useFetch()

	React.useEffect(() => {
		const {url, options} =PHOTO_GET(id)
		request(url, options)
	}, [request, id])


	if(error) return <Error error={error} />
	if(loading) return <Loading/>
	if(data)
	return <section className="container mainContainer"> <PhotoContent single={true} data={data}/> </section>
	else return null
}

export default Photo
