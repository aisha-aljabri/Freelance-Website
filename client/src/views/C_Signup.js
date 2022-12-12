import React, { useState } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';
import { navigate } from "@reach/router";
import '../style/signup.css'


const C_Signup = props => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [userlevel, setUserlevel] = useState("client")
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState("");


    const validation = e => {
        setValid("")
        e.preventDefault();
        console.log(name)
        axios.get(`http://localhost:8000/client/${name}`)
        .then(res => {
            if(res.data != null){
                setValid("the Username is exist");
            }
            else{
                handleform()
            }
        }).catch(err => {
            console.error(err);
        });
    }


    const handleform = () => {
        console.log("here")
        axios.post('http://localhost:8000/client/signup', {
            name,
            password,
            userlevel
        })
        .then(res => {
            console.log(res);
            if(res.data.errors) {
                setErrors(res.data.errors);
            } else {
                const user = {name, password, userlevel}
                props.setUser(user)
                props.setLogin(true)
                navigate(`/`);
            }
            }).catch(err => {
            console.error(err);
            });
    }

    const cancel = e =>{
        navigate("/")
    }
    return (
        <form id="Adduser" onSubmit={validation}>
        <p>
            {valid}
        </p>
        <p>
            <label>Name: </label><br/>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <p>{errors.name ? errors.name.message: ''}</p>
        </p>
        <br /> <br />
        <p>
            <label>Password: </label><br/>
            <input onChange={(e) => setPassword(e.target.value)} />
            <p>{errors.password ? errors.password.message: ''}</p>
        </p><br /><br />
        <p>
            <input type="submit" value="Create"/><br/><br/>
            <button onClick={cancel}>Cancel</button><br/>
            <Link id="link" to="/login">Login</Link>
        </p>
        </form>
    )
}

export default C_Signup;