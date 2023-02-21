import React, {useEffect, useState, useContext, createContext} from "react";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase";

const AuthContext = createContext();
export const UserAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) =>{
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      setLoading(false)
      setUser(user)
      if (user===null){
        navigate('/')
      } else navigate('/chats')
    })
    
  }, [user, navigate])
  // console.log("FIREBASE",user);

  return (
    <AuthContext.Provider value={user} >
      {!loading && children}
    </AuthContext.Provider>
  )

}