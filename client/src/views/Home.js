import React, {useState, useEffect} from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import { navigate } from "@reach/router";
import '../style/home.css';


export default props => {

    const redirect = (category) => {
        navigate("/"+category)
    }


    return (
        <div id="home">
            <button className="userlevel" onClick={()=>{redirect('Client')}}>Client</button>
            <button className="userlevel" onClick={()=>{redirect('Freelancer')}}>Freelancer</button>
        </div>
    )
}