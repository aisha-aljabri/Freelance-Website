import React, {useState, useEffect} from 'react'
import { Link } from '@reach/router';
import { navigate } from "@reach/router";
import "./CategoryList.css"
import '../style/header.css'


export default props => {

    const redirect = () => {
        navigate()
    }

    const Logout = () => {
        props.setLogin(false)
        props.setUser([])
        navigate('/')
    }
    
    return (
        <>
        <div id="header">
        </div>
        <div id="nav">
        <Link className="navLink" to="/">Home</Link>
        { props.login? 
        <>
        <Link  className="navLink" to="/users/profile">my account</Link>
        <button className="navLink" onClick={Logout}>Logout</button> 
        </>
        :
        <Link  className="navLink" to="/login">Login</Link>}
        </div>
        </>
    )
}