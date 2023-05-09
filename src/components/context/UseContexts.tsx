import { createContext,  useState } from "react";

type Auth ={
	user : string,
	password : string,
}
type Contextauth ={
	children : React.ReactNode
}
type ProviderAuth ={
	user : Auth | null,
	setUser  : React.Dispatch<React.SetStateAction<Auth | null>>,
}

export const AuthState = createContext<ProviderAuth | null>(null)

export const useContextsProvider = ({children}:Contextauth) => {

 const [user, setUser] = useState<Auth | null>(null)

return (
	 
	 <AuthState.Provider value={{user, setUser}}>
    {children}
	 </AuthState.Provider>  
 
)
}