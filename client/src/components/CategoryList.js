import React, {useState, useEffect} from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
import { navigate } from "@reach/router";
import "./CategoryList.css"
//img
import programming from '../img/programming.jpg'
import writing from '../img/writing.jpg'
import designing from '../img/designing.jpg'
import Drawing from '../img/Drawing.jpg'
import Photography from '../img/Photography.jpg'
import Singing from '../img/Singing.jpg'


export default props => {

    const redirect = (category) => {
        navigate("/categories/"+category)
    }
    
    return (
        <div id="container">
            <button className="categories" onClick={()=>{redirect('Programming')}}><img src={programming} /><p>Programming</p> </button>
            <button className="categories" onClick={()=>{redirect('Writing')}}><img src={writing} /><p>Writing</p> </button>
            <button className="categories" onClick={()=>{redirect('Designing')}}><img src={designing} /><p>Designing</p> </button>
            <button className="categories" onClick={()=>{redirect('Drawing')}}><img src={Drawing} /><p>Drawing</p> </button>
            <button className="categories" onClick={()=>{redirect('Photography')}}><img src={Photography} /><p>Photography</p> </button>
            <button className="categories" onClick={()=>{redirect('Singing')}}><img src={Singing} /><p>Singing</p> </button>
        </div>
    )
}