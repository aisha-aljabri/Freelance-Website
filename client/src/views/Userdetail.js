import React, { useState, useEffect } from 'react';
import '../style/profile.css'
import axios from 'axios'
import userl from '../img/user1.svg'
import { navigate } from "@reach/router";

export default props => {
    const [userinfo, setUserinfo] = useState([])
    const [comment, setComment] = useState("")
    const [allcomment, setAllcomment] = useState([])
    const [ratings, setRatings] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/freelancer/" + props.name)
        .then((res) => {
            console.log(res.data.name)
            setUserinfo(res.data);
        });

        axios
        .get(`http://localhost:8000/ratings`)
        .then(res => setRatings(res.data.filter(rating => rating.freelancer === props.name && rating.state === "done")))
        .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8000/comment")
        .then((res) => { 
            console.log(props.name)
            setAllcomment(res.data.filter(comment => comment.freelancer_name === props.name))
        })
    }, []);
    
    const onsubmithandle = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/comment/new', {
            "freelancer_name":userinfo.name,
            "client_name":props.user.name,
            'comment':comment
        })
        .then(res => {
            console.log(res)
            axios.get("http://localhost:8000/comment")
        .then((res) => { 
            console.log(props.name)
            setAllcomment(res.data.filter(comment => comment.freelancer_name === props.name))
        })
                navigate("/users/"+props.name)
        })
        .catch(err => console.log(err))
}
    const cancel = e =>{
        navigate("/")
    }
    return (
        <div id="profile">
            <img src={userl} />
        <div id="userinfo">
                <p>Name: {userinfo.name}</p>
                <p>Number of Works: {userinfo.projects}</p>
                <p>Phone: {userinfo.phone}</p>
                <p>{userinfo.category}</p>
                {/* <p className="stars"> &#9733; &#9733; &#9733; &#9734; &#9734;</p> */}
        </div>

        <div className="allcomment">
            <h2>All Ratings:</h2><br/>
        {ratings.map((myrating, id)=>{
                return <div className="com">
                                <p>client name: {myrating.client}<br/></p>
                                <p>rate:  {myrating.rating}<br /></p>
                                <p>comment:  {myrating.comment}<br /></p>
                        </div>
                
            })}
        </div>

        {/* <div className="allcomment">
        <h2>comments:</h2>
        {allcomment.map((commentt, id)=>{
                return <div className="com">
                                <h5>from: {commentt.client_name}</h5>
                                <h3>{commentt.comment}</h3>
                        </div>
                
            })}
        </div> */}

        {/* {props.login?
        <form id="comment" onSubmit={onsubmithandle}><br/><br/>
        <textarea  onChange={(e) => setComment(e.target.value)} />
        
        <input id ="submit" type="submit" value="Send"/><br/><br/>
        </form>:<></>} */}
        
        </div>
    )
    }