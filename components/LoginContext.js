import React, { useState, createContext } from 'react';
import Login from './Login'
import axios from 'axios';
import Cookies from 'js-cookie';
import Router from 'next/router';
import {baseUrl} from './Services';



const LoginProvider = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleNameChange = (e) =>{
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleLogin = async(e) => {
        e.preventDefault()
        const data = {
            username: username,
            password: password
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        try{
        const res = await axios.post(`${baseUrl}user/login/`,
        data,
        {headers}
        )
        if(res.status ===200){
            console.log(res)
            Cookies.set("token", res.data.token)
            Cookies.set("username", res.data.username)
            Cookies.set("id", res.data.id)
            Router.push({
                pathname:'/'
            })
        }
        }
        catch(error){
            console.log(error)
        }

    }
    return(
        <React.Fragment>
            <Login
                handleNameChange={handleNameChange}
                handlePasswordChange = {handlePasswordChange}
                handleLogin={handleLogin}
            />
        </React.Fragment>
    )
}

export default LoginProvider;
