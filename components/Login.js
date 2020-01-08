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
                    color: #db125f;
                    border-radius: 20px;
                    margin: auto;
                    text-align: center;
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
                    margin-top: 30px;
                    width: 150px;
                    border-radius: 20px;
                    background-color: #db125f;
                    border: 1px solid #db125f;
                
                }
            `}</style>

        </div>
    )
}

export default Login;
