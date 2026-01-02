import { useState   , createContext, Children, useEffect} from "react"
export let  authContext =  createContext()

function AuthContextProvider({children}){

    let [isLogin,setIsLogin]=useState(false)

    useEffect(()=>{
             let userId =  localStorage.getItem("userid")
             if (userId) {
                setIsLogin(true)
             }else{
                setIsLogin(false)
             }
    } , [])
    return(
        <>
        <authContext.Provider value={{isLogin , setIsLogin}}>
                {children}
        </authContext.Provider>
        </>
    )
}
export default AuthContextProvider