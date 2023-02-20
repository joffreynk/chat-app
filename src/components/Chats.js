import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

import { auth } from '../firebase'
import { userAuth } from '../contexts/AuthContext'

const Chats = () => {

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

      
    </div>
  )
}

export default Chats