import React, {useEffect, useRef, useState} from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useNavigate } from 'react-router-dom'

import { auth } from '../firebase'
import { UserAuth } from '../contexts/AuthContext'

const Chats = () => {
  const user = UserAuth()
  const [loading, setLoading] = useState(true);

  const url = "https://api.chatengine.io/users"

  const projectID = '687ead6c-4b6c-43b9-ab2d-8d63403e4e11'

  const getFile = async(url) => {
    const response = await fetch(url+'/me')
    const data = await response.blob();
    return new File([data], 'userphoto.jpg', { type:'image/jpg'})
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

    fetch(url, {
      "project-id": projectID,
      "user-name ": user.email,
      'user-secret': user.uid,
    }).then(()=>{
      setLoading(false)
    }).catch(()=>{
      let formdata = new FormData();
      formdata.append('email', user.email);
      formdata.append('username', user.displayName);
      formdata.append('secret', user.uid);
      getFile(user.photoURL).then((avatar)=>{
        formdata.append('avatar', avatar, avatar.name)

        fetch(url,  { body:formdata, method: 'post', headers: {'private-key': '34594051-6a10-4e7d-b1e4-3158d8d483eb' } }).then(()=>setLoading(false)).catch(err=>console.log(err)) })
    })
  },[user, navigate]);

  if (!user || loading) return 'Loading...';

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
      height="calc(100vh - 66px)"
			projectID = '687ead6c-4b6c-43b9-ab2d-8d63403e4e11'
			userName={user.email}
			userSecret={user.uid}
		/>
    </div>
  )
}

export default Chats