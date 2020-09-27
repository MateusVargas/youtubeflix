import 
React,
{ createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import api from './config'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
	const [user,setUser] = useState(null)

	return(
		<AuthContext.Provider 
			value={{signed: !!user,user}}
		>
			{children}
		</AuthContext.Provider>
	)
}