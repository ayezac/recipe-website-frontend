import React, { useState, useRef} from 'react'
import Link from 'next/link'
import Head from 'next/head';
import RecipeList from './RecipeDropdown';
import useOnClickOutside from './useOnClickOutside';
// import {LoginContext} from './LoginContext';
import Cookies from 'js-cookie';
import Router from 'next/router';

const Nav = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  // Call hook passing in the ref and a function to call on outside click
  const recipeModuleRef = useRef();  

  const handleLogout = (e) => {
    e.preventDefault()
    Cookies.remove('token')
    Cookies.remove('username')
    Router.push({pathname:'/'})
  }

  useOnClickOutside(recipeModuleRef, () => setModalOpen(false));
  const token = Cookies.get('token')
  const username = Cookies.get('username')

  return (
    <>
    <nav>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Alata&display=swap" rel="stylesheet" />
      </Head>
      <ul>
          <Link href="/">
            <a>Home</a>
          </Link>
          <div className="recipe-button">
          <button onClick={()=>setModalOpen(true)}>Recipes</button>
          {isModalOpen &&
          <RecipeList ref={recipeModuleRef}  />}
          </div>
          {!token &&
          <span>
            <Link href='/login'>
              <a>Login/</a>
            </Link>
              <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </span>
          } 
          {token &&
           <span>
            <Link href="/profile">
              <a>{username}</a>
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </span>
          }  
    
      </ul>
      </nav>
    
  
     
      <style jsx>{`
      nav {
        width: 100%;
        font-family: 'Alata', sans-serif;
        height: 50px;

      }
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        list-style: none;
        padding: 15px;
        width: 98%;
        margin: auto;
      }

      a {
        color: #3C5580;
        text-decoration: none;
        font-size: 16px;
        text-align: center;
      }
      a:hover{
        text-decoration: underline;
      }
      button:hover{
        text-decoration: underline;
      }

      button{
        color: #3C5580;
        text-decoration: none;
        font-size: 16px;
        text-align: center;
        background: white;
        font-family: 'Alata', sans-serif;
        border: none;
        cursor: pointer;
      }
   
    `}</style>
  </>
  )};

export default Nav
