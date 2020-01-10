import React, { useState, useRef} from 'react'
import Link from 'next/link'
import Head from 'next/head';
import RecipeList from './RecipeDropdown';
import ProfileDropdown from './ProfileDropdown';
import useOnClickOutside from './useOnClickOutside';
import Cookies from 'js-cookie';


const Nav = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false)
  
  // Call hook passing in the ref and a function to call on outside click
  const recipeModuleRef = useRef();  
  const profileModuleRef = useRef();

  useOnClickOutside(recipeModuleRef, () => setModalOpen(false));
  useOnClickOutside(profileModuleRef, () => setProfileDropdown(false));
  const token = Cookies.get('token')
  const username = Cookies.get('username')

  return (
    <>
    <nav>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Alata&display=swap" rel="stylesheet" />
      </Head>
      <ul>
          <li className="nav-link">
          <Link href="/">
            <a>Home</a>
          </Link>
          </li>
          {token &&
            <div className="nav-link">
              <button onClick={()=>setModalOpen(true)}>Recipes</button>
              {isModalOpen && 
              <RecipeList ref={recipeModuleRef}  />}
            </div>
          }
          {!token &&
            <li className="nav-link" id="login">
              <Link href='/login'>
                <a>Login/</a>
              </Link>
                <Link href="/signup">
                <a>Sign Up</a>
              </Link>
            </li>
          } 
              {token &&
              <div>
                <button 
                  className="nav-link"
                  onClick={()=>setProfileDropdown(true)}>
                    {username}
                </button>
              {profileDropdown &&
                <ProfileDropdown ref={profileModuleRef} />
              }
              </div>
              }
      </ul>
      </nav>
    
  
     
      <style jsx>{`
      nav {
        width: 100%;
        font-family: 'Alata', sans-serif;
        height: 50px;
        border-bottom: 1px solid  #e00472;
        
      }
      .nav-link{
        width: 200px;
        text-align: center;
      }
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        list-style: none;
        width: 98%;
        margin: auto;
        postion: relative;
        bottom: 10px;
      }

      a {
        color: black;
        text-decoration: none;
        font-size: 16px;
        text-align: center;
      }
      a:hover{
        text-decoration: underline;
        color: #e00472;
      }
      button:hover{
        text-decoration: underline;
        color: #e00472;
      }

      button{
        color:black;
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
