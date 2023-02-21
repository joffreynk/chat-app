import React, {useEffect, useRef, useState} from 'react'
import { Avatar, ChatEngine } from 'react-chat-engine'
import { useNavigate } from 'react-router-dom'

import { auth } from '../firebase'
import { UserAuth } from '../contexts/AuthContext'
import { type } from '@testing-library/user-event/dist/type'

const Chats = () => {
  const user = UserAuth()
  const [loading, setLoading] = useState(true);

  const url = "https://api.chatengine.io/users/me/"
  const projectID = '687ead6c-4b6c-43b9-ab2d-8d63403e4e11'
  const headers = {
    "project-id": projectID,
    "user-name ": user.email,
    'user-secret': user.uid,
  }

  console.log(headers);
  const getFile = async(url) => {
    const response = await fetch(url)
    const data = await response.blob();
    return new File([data], 'userphoto.jpg',{ type:'image/jpg'})
  }


  const navigate = useNavigate()
  const handleLogout = async ()=>{
    await auth.signOut();
    navigate('/')
  }

  useEffect(() => {
    if (!user) {
      navigate('/')
      return
    }
    fetch(url, headers)
    .then(()=>{
      setLoading(false)
    }).catch(()=>{

    })
  },[])

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          CR
        </div>
        <div 
        className='logout-tab'
        onClick={handleLogout}
        >Log out</div>
      </div>
      <ChatEngine
			projectID = {projectID}
			userName='adam'
			userSecret='pass1234'
		/>
    </div>
  )
}

export default Chats