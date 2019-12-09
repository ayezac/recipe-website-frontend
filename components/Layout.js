import React from 'react';
import Nav from './Nav';
import Head from 'next/head';
import Link from 'next/link';


const layoutStyle = {
    margin: 10,
    padding: 20,
    border: '1px solid #DDD',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%'
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
        <div style={layoutStyle}>
        {props.children}
        <footer>
          <p>&copy; 2019</p>       
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </footer> 
        </div>
    <style jsx>{ `
       footer {
        clear: both;
        position: relative;
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: #3C5580;
        height: 50px;
        width: 99%;
        color: #fff;
        padding: 10px;
    }
    footer a {
      color: white;
    }
      `}</style>
        </React.Fragment>
        
        
  )};

  
  export default Layout;