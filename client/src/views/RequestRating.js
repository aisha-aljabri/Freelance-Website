import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import "../style/request.css"

export default (props) => {
    const [clients, setClients] = useState([]);
    const[freelancer, setFreelancer] = useState(props.user.name)
    const[client, setClient] = useState("jll")
    const[comment, setComment] = useState("nothing")
    const[rating, setRating] = useState(0)
    const [state, setState] = useState("inprocess")
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/client`)
          .then((res) => {setClients(res.data)})
          .catch(err => console.log(err)
          )}, []);
      const addrating = (name) =>{
            console.log("client is "+ client)
            axios.post(`http://localhost:8000/rating/new`,{
            freelancer,
            client,
            comment,
            rating,
            state
          })
          .then(res => {
            if(res.data.errors){
              setErrors(res.data.errors);
            }
            else{
              navigate("/users/profile")
            }
          })
      }
      const cancel = e =>{
        navigate("/")
      }
      return (
        <div id="clients">
          {clients.map((myclient) => {
          return  <>
                  <div id="request" onChange={(e) => setClient(myclient.name)}>
                        <input type="radio" value={myclient.name} name="rating" />{myclient.name}
                        <br/>
                  </div>
                  </>
          })}
          <button onClick={addrating}>Send</button>
        
          <button onClick={cancel}>Cancel</button>
        </div>
      )
}