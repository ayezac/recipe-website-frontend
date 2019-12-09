import React, {useState} from 'react';
import Layout from '../components/Layout';
import LoginProvider from '../components/LoginContext';


const LoginPage =  () => {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    // const handleNameChange = (e) =>{
    //     setUsername(e.target.value)
    // }
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value)
    // }

    // const handleLogin = async(e) => {
    //     e.preventDefault()
    //     const data = {
    //         username: username,
    //         password: password
    //     }
    //     const headers = {
    //         'Content-Type': 'application/json'
    //     }
    //     try{
    //     const res = await axios.post(`http://yoshi.willandskill.eu:8222/user/login/`,
    //     data,
    //     {headers}
    //     )
    //     if(res.status ===200){
    //         console.log(res)
    //         Cookies.set("token", res.data.token)
    //         Router.push({
    //             pathname:'/'
    //         })
    //     }
    //     }
    //     catch(error){
    //         console.log(error)
    //     }

    // }
    return(
        <Layout>
           
            <LoginProvider/>
        
        </Layout>
    )
}

export default LoginPage;