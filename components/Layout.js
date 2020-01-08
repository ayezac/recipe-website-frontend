import React from 'react';
import Nav from './nav';
import Head from 'next/head';
import Link from 'next/link';
import { SSL_OP_SINGLE_DH_USE } from 'constants';


const layoutStyle = {
    padding: 20,
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '100%',
  };
  
  const Layout = props => {
    
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
      <Nav/>
      <body>
        <div style={layoutStyle}>
        {props.children}
         
        </div>
        <footer>
          <p>&copy; 2019</p>       
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </footer>
    <style jsx>{ `

        body { 
          height: 100vh;
          margin: 0;
          padding: 10px;
        }

        footer {
          clear: both;
          margin-top: -15px;
          margin-bottom: 10px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          height: 40px;
          width: 98%;
          background-color: black;
          color: white;
          padding: 10px;
          position: relative;
          left: 1.5%;
      }
    footer a {
      color: white;
    }
      `}</style>
         </body>
        </React.Fragment>
     
        
  )};

  
  export default Layout;