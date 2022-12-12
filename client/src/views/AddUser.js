import React, { useState } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';
import { navigate } from "@reach/router";
import '../style/Adduser.css'


export default props => {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("Programming")
    const [rate, setRate] = useState(0)
    const [numofworks, setnumofworks] = useState(0)
    const [phone, setPhone] = useState(0)
    

    const handleform = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/users/new', {
            name,
            category,
            rate,
            numofworks,
            phone
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        props.setUsername(name)
        navigate(`/main`)
    }
    const cancel = e =>{
        navigate("/")
    }
    return (
        <>
        <form id="adduser" onSubmit={handleform}>
        <p>
            <label>User Name: </label><br/>
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </p>
        <p>
            <label>category: </label><br/>
            <select name="categories" onChange={(e) => setCategory(e.target.value)}>
                <option value="Programming">Programming</option>
                <option value="Writing">Writing</option>
                <option value="Designing">Designing</option>
                <option value="Drawing">Drawing</option>
                <option value="Photography">Photography</option>
                <option value="Singing">Singing</option>
            </select>
        </p>
        <p>
            <label>Phone: </label><br/>
            <input onChange={(e) => setPhone(e.target.value)} />
        </p>
        <input type="submit" value="Create"/>
        <button onClick={cancel}>Cancel</button>
        </form>
        </>
        
    
    )
}