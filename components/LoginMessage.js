import React from 'react';
import Link from 'next/link';
import Head from 'next/head';


const LoginMessage = () => {
    return(
        <React.Fragment>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                    crossOrigin="anonymous"
                />
            </Head>
            <div className="alert-container">
            <div className="alert alert-warning" role="alert">
            <strong> You need to be logged in to add a recipe. </strong>
            <br/><Link href="/login"><a>Login here</a></Link> 
            </div>
            </div>
            <style jsx>{`
              .alert-container{
                  width: 400px;
                  margin: auto;
                  text-align: center;
              }
            `}</style>
        </React.Fragment>
    )
}

export default LoginMessage;