import React from "react"

import { Routes, Route } from "react-router-dom"

// import { AuthProvider } from "../contexts/AuthContext"

// import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Routes>
        <Route path="/" element = {<Login />} />
      </Routes>
    </div>
  )
}

export default App
