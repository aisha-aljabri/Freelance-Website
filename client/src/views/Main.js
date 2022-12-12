import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

//my components
import CategoryList from '../components/CategoryList';


const Main = props => {

    return(
        <div>
        <br/>
        <CategoryList  />
        </div>
    )
}

export default Main;