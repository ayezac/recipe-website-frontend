import React, { useState, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import RecipeList from "./RecipeDropdown";
import ProfileDropdown from "./ProfileDropdown";
import useOnClickOutside from "./useOnClickOutside";
import Cookies from "js-cookie";
import MobileMenuDropdown from "./MobileMenuDropdown";

const Nav = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  // Call hook passing in the ref and a function to call on outside click
  const recipeModuleRef = useRef();
  const profileModuleRef = useRef();
  const menuModuleRef = useRef();

  useOnClickOutside(recipeModuleRef, () => setModalOpen(false));
  useOnClickOutside(profileModuleRef, () => setProfileDropdown(false));
  useOnClickOutside(menuModuleRef, () => setToggleMenu(false));

  const token = Cookies.get("token");
  const username = Cookies.get("username");

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Alata|Raleway&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      {/* Navbar for desktop view */}
      <nav className="navbar-desktop">
        <ul className="nav-links-desktop">
          <li className="nav-link">
            <Link href="/">
              <a className="nav-brand">MyRecipeBook</a>
            </Link>
          </li>
          {token && (
            <div className="nav-link">
              <button onClick={() => setModalOpen(true)}>Recipes</button>
              {isModalOpen && <RecipeList ref={recipeModuleRef} />}
            </div>
          )}
          {!token && (
            <li className="nav-link" id="login">
              <Link href="/login">
                <a>Login/</a>
              </Link>
              <Link href="/signup">
                <a>Sign Up</a>
              </Link>
            </li>
          )}
          {token && (
            <div>
              <button
                className="nav-link"
                onClick={() => setProfileDropdown(true)}
              >
                {username}
              </button>
              {profileDropdown && <ProfileDropdown ref={profileModuleRef} />}
            </div>
          )}
        </ul>
      </nav>

      {/* Navbar for Mobile View */}
      <nav className="navbar-mobile">
        <div
          role="button"
          className="nav-header"
          onClick={() => setToggleMenu(true)}
        >
          <i className="material-icons">menu</i>
          <Link href="/">
            <a className="nav-brand">MyRecipeBook</a>
          </Link>
        </div>

        {/* display menu dropdown when menu icon clicked */}
        {toggleMenu && (
          <MobileMenuDropdown ref={menuModuleRef} className="menu-dropdown" />
        )}
      </nav>

      <style jsx>{`
        .navbar-mobile {
          display: none;
        }
        nav {
          width: 100%;
          font-family: "Alata", sans-serif;
          height: 50px;
          box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.16);
        }

        .nav-brand {
          font-family: "Raleway", sans-serif;
          font-size: 1.2rem;
          background-color: black;
          color: white;
          padding: 5px;
        }
        .nav-link {
          text-align: center;
        }
        .nav-links-desktop {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
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
        a:hover {
          color: #e00472;
        }
        button:hover {
          text-decoration: underline;
          color: #e00472;
        }

        button {
          color: black;
          text-decoration: none;
          font-size: 16px;
          text-align: center;
          background: white;
          font-family: "Alata", sans-serif;
          border: none;
          cursor: pointer;
        }
        @media only screen and (max-width: 700px) {
          .navbar-desktop {
            display: none;
          }
          .navbar-mobile {
            display: block;
            height: 80px;
            width: 100%;
          }
          .nav-header {
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding-top: 20px;
            width: 100%;
          }
          .material-icons {
            padding-right: 10px;
            font-size: 44px;
          }
          .nav-brand {
            width: 200px;
            font-size: 1.3rem;
          }
          .menu-dropdown {
            z-index: 4;
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
