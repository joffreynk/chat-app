import React, {useEffect, useRef, useState} from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useNavigate } from 'react-router-dom'

import { auth } from '../firebase'
import { UserAuth } from '../contexts/AuthContext'

const Chats = () => {

  const user = UserAuth()

  const navigate = useNavigate()
  const handleLogout = async ()=>{
    await auth.signOut();
    navigate('/')
  }

  

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
			projectID='
      687ead6c-4b6c-43b9-ab2d-8d63403e4e11'
			userName='adam'
			userSecret='pass1234'
		/>
    </div>
  )
}

export default Chats