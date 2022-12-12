import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import '../style/Login.css'

export default (props) => {
  const { id } = props;
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [userlevel, setUserlevel] = useState("client")
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/client/${props.user.name}`)
      .then((res) => {
        setName(res.data.name);
        setPassword(res.data.password)
      });
  }, []);

  const updateUser = e => {
    e.preventDefault();
    const user = {name, password, userlevel};
    axios.put(`http://localhost:8000/client/edit/${props.user.name}`, user)
      .then(res => {
        console.log(res);
        if(res.data.errors) {
          setErrors(res.data.errors);
        } else {
          props.setUser(user)
          navigate("/users/profile");
        }
      }).catch(err => {
        console.error(err);
      });
  }
  const cancel = e =>{
    navigate("/")
}
  return (
    <div id="login">
            <h1>Edit</h1>
            <form onSubmit={updateUser}>
                <p>
                    <label>Username </label><br />
                    <input type="text" name="Name" value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                    <p>{errors.name ? errors.name.message: ''}</p>
                </p>
                <p>
                    <label>Password: </label><br/>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p>{errors.password ? errors.password.message: ''}</p>
                </p>
                <input type="submit" value="submit"/>
                <button onClick={cancel}>Cancel</button>
        
            </form>
        </div>
  );
};