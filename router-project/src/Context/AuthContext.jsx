import { createContext, useState } from "react"


export const AuthContext = createContext();


function AuthContextProvider ({children}) {

    const [isAuth, setIsAuth] = useState(false)
    let prodArr = []

    const toggleAuth = () => {
        setIsAuth(!isAuth)
    }

    return (
        <AuthContext.Provider value = {{isAuth,toggleAuth, prodArr}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider