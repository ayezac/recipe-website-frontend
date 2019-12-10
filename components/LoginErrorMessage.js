import React from 'react'
import Head from 'next/head';

const LoginError =()=>{
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
        <div className="alert alert-danger" role="alert">
            <strong>Error!</strong> Something went wrong. Check your username and password and try again.
        </div>
        </React.Fragment>
    )
}

export default LoginError;