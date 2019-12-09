import React from 'react';
import Head from 'next/head';

const Login =(props)=>{
    return(
        <div>
             <Head>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                    crossOrigin="anonymous"
                />
            </Head>
            <div className="container">
            <h3>Login</h3>
            <form className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="username"
                    onChange={props.handleNameChange}/>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    className="form-control"
                    id="password"
                    onChange={props.handlePasswordChange}/>
                <button className="btn btn-primary" onClick={props.handleLogin}>Login</button>
            </form>
            </div>
            <style jsx>{`
                .container{
                    width: 30%;
                    position: absolute;
                    left: 10%;
                    right: 10%;
                    top: 20%;
                    z-index: 1;
                    width: 500px;
                    height: 300px;
                    background-color: black;
                    color: white;
                    border-radius: 20px;
                  
                }
               
                h3{
                    text-align: center;
                    padding-top: 20px;
                }
                .form-group{
                    padding-top: 30px;
                    width: 400px;
                }
                .btn{
                    margin-top: 10px;
                }
            `}</style>

        </div>
    )
}

export default Login;
