import React, { useState } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';
import { navigate } from "@reach/router";
import '../style/signup.css'


const F_Signup = props => {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("Programming")
    const [rate, setRate] = useState(0)
    const [projects, setprojects] = useState(0)
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [userlevel, setUserlevel] = useState("freelancer")
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState("");

    const validation = e => {
        setValid("")
        e.preventDefault();
        axios.get(`http://localhost:8000/freelancer/${name}`)
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
        axios.post('http://localhost:8000/users/signup', {
            name,
            category,
            rate,
            projects,
            phone,
            password,
            userlevel
        })
        .then(res => {
            console.log(res);
            if(res.data.errors) {
              setErrors(res.data.errors);
            } else {
                const user = {name, category,rate, projects, userlevel, phone, password}
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
            <label>Username: </label><br/>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <p>{errors.name ? errors.name.message: ''}</p>
        </p>
        <br /> <br />
        <p>
            <label>category: </label><br/>
            <select name="categories"  onChange={(e) => setCategory(e.target.value)}>
                <option value="Programming">Programming</option>
                <option value="Writing">Writing</option>
                <option value="Designing">Designing</option>
                <option value="Drawing">Drawing</option>
                <option value="Photography">Photography</option>
                <option value="Singing">Singing</option>
            </select>
            <p>{errors.category ? errors.category.message: ''}</p>
        </p><br /><br />
        <p>
            <label>Phone: </label><br/>
            <input onChange={(e) => setPhone(e.target.value)} />
            <p>{errors.phone ? errors.phone.message: ''}</p>
        </p><br /><br />
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

export default F_Signup;