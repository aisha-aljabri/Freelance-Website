import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';
import { navigate } from "@reach/router";
import '../style/categorydetail.css'
import userl from '../img/user1.svg'


export default props => {
    const [users, setUsers] = useState([])
    const[category, setCategory] = useState([])
    const [f, setf] = useState([])
    
    


    useEffect(()=> {
        axios.get('http://localhost:8000/users')
        .then(res => setUsers(res.data.filter(user => user.category === props.category)))
        .catch(err => console.log(err)
        )}, [])

        const chat = () => {
            if(props.login == true)
                navigate(`/chat`)
            else{
                navigate(`/login`)
            }
        }
    return (
        <div id="category">
            {users.map((user, id)=>{
                return <div className="user">
                            <Link key={id} to={`/users/${user.name}`}><img src={userl} /></Link>
                            <p>
                                Name:  {user.name}<br />
                                Number of Works:  {user.projects}<br />
                                Phone:  {user.phone}<br />
                                {/* &#9733; &#9733; &#9733; &#9734; &#9734; <br /><br /> */}
                            </p>
                        </div>
            })}
        </div>
    )
}