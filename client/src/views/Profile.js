import React, { useState, useEffect } from 'react';
import '../style/profile.css'
import user from '../img/user1.svg'
import axios from 'axios'
import { navigate } from "@reach/router";
import e from 'cors';

export default props => {
    const [category, setcategory] = useState(props.user.category)
    const [ratings, setRatings] = useState([])
    
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const [state, setState] = useState("done")
    const [f, setf] = useState([])

    const updateUser =() => {
        navigate(`/${props.user.userlevel}/edit`)
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/freelancer/aisha_jabri`)
        .then(res => {
            setf(res.data)
        }).catch(err => {
            console.error(err);
        },[]);
    })

    useEffect(() => {
        // if(props.user.userlevel === "freelancer"){
        //     axios
        //     .get(`http://localhost:8000/ratings`)
        //     .then(res => setRatings(res.data.filter(rating => rating.freelancer === props.user.name && rating.state === "done")))
        //     .catch(err => console.log(err))
        // }

        // else 
        if(props.user.userlevel === "client"){
            axios
            .get(`http://localhost:8000/ratings`)
            .then(res => setRatings(res.data.filter(rating => rating.client === props.user.name && rating.state === "inprocess")))
            .catch(err => console.log(err))
        }}, [])

    const deleteAccount = ()=> {
        axios.delete(`http://localhost:8000/${props.user.userlevel}/delete/${props.user.name}`)
        props.setLogin(false)
        props.setUser([])
        navigate('/')
    }

    const addratings =() => {
        navigate('/rating/new')
    }

    const editRating = (e, id, name) =>{
        e.preventDefault();
        if(rating != 0 && comment != "nothing"){
            axios.put(`http://localhost:8000/ratings/${id}/edit`, {
            comment,
            rating,
            state
            })
            .then(res => {
            console.log(res);
            }).catch(err => {
            console.error(err);
            });
            editProject(name)
            }
    }

    // const getp = (name) =>{
    //     axios.get(`http://localhost:8000/freelancer/${name}`)
    //     .then(res => {
    //         setf(res.data)
    //     }).catch(err => {
    //         console.error(err);
    //     },[]);
    //     editProject(name)
    // }

    const editProject = (name) =>{
        axios.put(`http://localhost:8000/freelancer/edit/${name}`, {
            "projects": (f.projects+1)
            })
            .then(res => {
            console.log(res);
            }).catch(err => {
            console.error(err);
            });
            console.log(f.name)
            console.log("projects " + f.projects)
            window.location.reload();
    }

    return (
        <>
        {props.user.userlevel == "freelancer"?
        <div id="profile">
        <img src={user} />
        <div id="userinfo">
        <p>Name: {props.user.name}</p>
        <p>{props.user.category}</p>
        <p>Phone: {props.user.phone}</p>
        <p>Password: {props.user.password}</p>
        <p>projects: {props.user.projects}</p>
        {/* <p> &#9733; &#9733; &#9733; &#9734; &#9734;</p> */}
        </div>

        <div id="mybut">
        <button>Edit</button>
        <button>Delete Account</button>
        <button onClick={addratings}>Request Rating</button>
        </div>
{/* 
        {ratings.map((myrating, id)=>{
                return <div className="rating">
                            <p>
                                {myrating.client}<br/>
                                rate:  {myrating.rating}<br />
                                comment:  {myrating.comment}<br />
                            </p>
                        </div>
                
            })} */}

    </div>:
    <div id="profile">
        <img src={user} />
        <div id="userinfo">
        <p>Name: {props.user.name}</p>
        <p>Password: {props.user.password}</p>
        </div>
        <div id="mybut">
        <button onClick={updateUser}>Edit</button>
        <button onClick={deleteAccount}>Delete Account</button>
        </div>
        {ratings.map((myrating)=>{
                return <div id="rating">
                    name:  {myrating.freelancer}<br />
                    <form onSubmit={e => editRating(e, myrating._id, myrating.freelancer)}>
                    <div onChange={(e) => setRating(e.target.value)}>
                    rating: 
                        1 <input type="radio" value="1" name="rating" />
                        2 <input type="radio" value="2" name="rating" />
                        3 <input type="radio" value="3" name="rating" />
                        4 <input type="radio" value="4" name="rating" />
                        5 <input type="radio" value="5" name="rating" />
                    </div>
                    comment: <br/>
                    <textarea cols="100" rows="8" onChange={(e) => setComment(e.target.value)} />
                    <br/>
                    <input type="submit" value="send"/><br/><br/>
                    </form>
                    </div>
            })}
        </div>
}</>
    
    )
}