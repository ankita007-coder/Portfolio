import { Button, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../actions/user";
import "./Login.css";

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const alert = useAlert();
    const{loading,error,message} = useSelector(state=>state.login);


    const submitHandler = (e)=>{
      e.preventDefault();
      dispatch(login(email,password));
    }

    useEffect(()=>{
      if(error){
        alert.error(error);
        dispatch({
          type:"CLEAR_ERRORS",
          payload: null
        });
      }
      if(message){
        alert.success(message);
        dispatch({
          type: "CLEAR_MESSAGE",

        })
      }
    },[alert,error,message,dispatch]);
   
  return <div className="login">
    <div className="loginContainer">
        <form action="" method="post" className="loginForm" onSubmit={submitHandler}>
            <Typography variant="h4">
                <p>A</p>
                <p>D</p>
                <p>M</p>
                <p>I</p>
                <p style={{marginRight: "1vmax"}}>N</p>
                <p>P</p>
                <p>A</p>
                <p>N</p>
                <p>E</p>
                <p>L</p>
            </Typography>
            <div>
              <input 
                type="email"
                placeholder="Admin Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)} 
                required
              />
              <input 
                type="password"
                placeholder="Admin Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
              />
              <Button type="submit" variant="contained" disabled={loading}>Login</Button>
            </div>
        </form>
    </div>
  </div>;
};

export default Login;
