import React from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Button from '../Forms/Button'
import { PHOTO_POST } from '../../Api'
import Error from '../Helper/Error'
import { useNavigate } from 'react-router-dom'

const UserPhotoPost = () => {

	const nome = useForm();
	const peso= useForm('number')
	const idade= useForm('number')
	const [img, setImg] = React.useState({})
	const {data, error, loading, request} = useFetch() 
	const navigate = useNavigate()

	React.useEffect(() => {
	 if(data)	navigate('/conta')
	}, [data, navigate])


	function handleSubmit(event){
		event.preventDefault()
		const formData = new FormData()
		formData.append('img', img.raw)
		formData.append('nome', nome.value)
		formData.append('peso', peso.value)
		formData.append('idade', idade.value)


		const token= window.localStorage.getItem('token')
		const {url, options} =PHOTO_POST(formData, token);
		request(url, options)
	}

	function handleImgChange({target}){
		setImg({
			preview: URL.createObjectURL(target.files[0]),
			raw: target.files[0], 
		})
	}

	return (
		<section className={`${styles.photoPost} animeLeft`}>
			<form onSubmit={handleSubmit}>
				<Input type="text" name="nome" label="Nome" {...nome} />
				<Input type="number" name="peso" label="Peso" {...peso}/>
				<Input type="number" name="idade" label="Idade" {...idade}/>
				<Input className={styles.files} type="file" name="img" id="img" onChange={handleImgChange} />
				{loading ? (
					<Button disabled> Enviando... </Button> 
				) : (
					<Button> Enviar </Button>
				)}
				<Error error={error}/>
		
			</form>
			<div>
				{img.preview &&
					 <div 
					 	className={styles.preview} 
						style={{backgroundImage: `url('${img.preview}')`}}>
					 </div> 
				}
			</div>
		</section>
	)
}

export default UserPhotoPost
