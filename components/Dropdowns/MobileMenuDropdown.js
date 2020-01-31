import React from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import Router from "next/router";

const MobileMenuDropdown = React.forwardRef((props, ref) => {
  const token = Cookies.get("token");
  const username = Cookies.get("username");

  const handleLogout = e => {
    e.preventDefault();
    Cookies.remove("token");
    Cookies.remove("username");
    Router.push({ pathname: "/" });
  };
  return (
    <div ref={ref}>
      <div className="navlink-container">
        <li className="nav-link">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li className="nav-link recipes-item">
          <Link href="/recipes">
            <a>All Recipes</a>
          </Link>
        </li>
        <li className="nav-link">
          <Link href="/myrecipes">
            <a>My Recipes</a>
          </Link>
        </li>
        <li className="nav-link">
          <Link href="/recipeForm">
            <a>Add A Recipe</a>
          </Link>
        </li>
        <li className="nav-link">
          <Link href="/findrecipe">
            <a>Find A Recipe</a>
          </Link>
        </li>

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
          <div className="profile-links">
            <li className="nav-link">
              <Link href="/profile">
                <a>{username}</a>
              </Link>
            </li>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      <style jsx>{`
        .navlink-container {
          position: relative;
          z-index: 2;
          color: #e00472;
          background-color: black;
        }
        .nav-links-mobile {
          display: flex;
          flex-direction: column;
        }
        .nav-brand {
          width: 200px;
          font-size: 1.3rem;
        }
        .profile-links {
          display: flex;
          flex-direction: column;
        }
        .nav-link {
          font-size: 1.2rem;
        }
        a {
          color: #e00472;
        }
      `}</style>
    </div>
  );
});

export default MobileMenuDropdown;
