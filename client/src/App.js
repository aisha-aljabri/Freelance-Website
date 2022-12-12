import React, {useState, useEffect} from 'react'
import { Router } from '@reach/router';
import axios from 'axios'
import './App.css'
import Main from './views/Main.js'
import CategoryDetail from './views/CategoryDetail'
import Header from './components/Header';
import Home from './views/Home';
import C_Signup from './views/C_Signup'
import F_Signup from './views/F_Signup'
import Login from './views/Login'
import Profile from './views/Profile'
import Userdetail from './views/Userdetail'
import Chat from './views/Chat'
import Update from './views/ClientEdit'
import Rating from './views/RequestRating'


function App() {
  const [user, setUser] = useState([])
  const [login, setLogin] = useState(false)

  return (
    <div className="App">
      <Header login={login} setUser={setUser} setLogin={setLogin}/>
      <Router>
          <Home path="/home"/>
          <Main path="/"  />
          <CategoryDetail path="/categories/:category" login={login}/>
          <C_Signup path="/Client" setUser={setUser} setLogin={setLogin}/>
          <F_Signup path="/Freelancer" setUser={setUser} setLogin={setLogin}/>
          <Login path="/login" setUser={setUser} setLogin={setLogin} login={login}/>
          <Profile path="/users/profile" user={user} setUser={setUser} setLogin={setLogin}/>
          <Userdetail path="/users/:name" user={user} login={login}/>
          <Chat path="/chat" />
          <Update path="/client/edit"  user={user} setUser={setUser}/>
          <Rating path="/rating/new" user={user}/>
      </Router>
    </div>
  );
}

export default App;
