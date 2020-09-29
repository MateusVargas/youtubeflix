import 
React,
{ createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import LoaderButton from '../components/LoaderButton'

import api from '../config'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
	const [user,setUser] = useState(null)
	const [loading,setLoading] = useState(false)

	useEffect(()=>{
		async function verifyData(){
			setLoading(true)
			const tk = localStorage.getItem('tk')
			if(tk){
				api.defaults.headers.Authorization = `Bearer ${JSON.parse(tk)}`
				setUser(true)
			}
			setLoading(false)
		}
		verifyData()
	},[])


	async function signIn(data){
		try{
			const response = await api.post('auth/login',data)
			if(response.status === 200){
				localStorage.setItem('tk',JSON.stringify(response.data.access_token))
    			api.defaults.headers['Authorization'] = `Bearer ${response.data.access_token}`
				setUser(true)
			}
		}catch(error){
			console.log(error)
		}
	}


	async function signOut(){
		setLoading(true)
		try{
			const response = await api.post('auth/logout')
			
			if(response.status === 204){
				await localStorage.removeItem('tk')
    			api.defaults.headers['Authorization'] = ''
				setUser(null)
			}

			setLoading(false)
		}catch(error){
			setLoading(false)
			console.log(error)
		}
	}


	if(loading){
		return <LoaderButton/>
	}

	return(
		<AuthContext.Provider 
			value={{signed: !!user,user,signIn,signOut}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext