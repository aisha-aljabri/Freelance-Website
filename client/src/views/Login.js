import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';
import { navigate } from "@reach/router";
import '../style/Login.css'


export default props => {
    const [level, setLevel]=useState("client")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("");
    
    useEffect(()=>{
        if(props.login === true){
            console.log(props.login)
            navigate("/")
        }
    })

    const handleform = e => {
        setErrors("")
        e.preventDefault();
        axios.get(`http://localhost:8000/${level}/${name}`)
        .then(res => {
            if(res.data != null){
            if(res.data.name == name && res.data.password == password){
                props.setUser(res.data)
                props.setLogin(true)
                navigate("/");
            }}
            else{
                setErrors("Wrong username or password");
            }
        }).catch(err => {
            console.error(err);
        });
    }
    return (
        <div id="login">
        <form id="logform" onSubmit={handleform}>
        <h1>Login</h1>
        <p>
            <select  onChange={(e) => setLevel(e.target.value)}>
                <option value="freelancer">Freelancer</option>
                <option value="client">Client</option>
            </select>
        </p>
        <p>
            <label>Username: </label><br/>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </p>
        <br /> <br />
        <p>
            <label>Password: </label><br/>
            <input onChange={(e) => setPassword(e.target.value)} />
        </p><br /><br />
        <p>
            <input type="submit" value="Log In"/>
            <Link id="link" to="/home">sign up</Link>
        </p>
        <p>
            
        </p>
        <p>{errors}</p>
        </form>
        
        
        </div>
    )
}