import {useEffect, useState, useContext, createContext} from "react";
import {useHistory } from 'react-router-dom'
import { auth } from "../firebase";

const AuthContext = createContext()
export const useAuth = ()=>useContext(AuthContext)

export const AuthProvider = ({ children }) =>{
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})
  const history = useHistory();

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      setLoading(false)
      setUser(user)
      history('/chats')
    }) //
  }, [user, history])

  return (
    <AuthContext.Provider value={user} >
      {!loading && children}
    </AuthContext.Provider>
  )

}