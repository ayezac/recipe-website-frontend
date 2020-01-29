import React from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Router from 'next/router';

const ProfileDropdown = React.forwardRef((props,ref) => {
   
    const handleLogout = (e) => {
        e.preventDefault()
        Cookies.remove('token')
        Cookies.remove('username')
        Router.push({pathname:'/'})
      }
    
  
    return(
        <React.Fragment>
            <div className="profile-dropdown" ref={ref}>
                <Link href="/profile" as="/profile-page">
                    <a>View Profile</a>
                </Link>
                <button onClick={handleLogout}>Logout</button>
            
            </div>
            <style jsx>{`
                .profile-dropdown{
                    position: relative;
                    top: 7%;
                    background-color:#8c8c89;
                    padding: 10px;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;

                }
                 a{
                    font-size: 1rem;
                    text-decoration:none;
                    color: white;
                    padding: 10px;
                    margin: 5px;
                    list-style: none;
                    font-family: 'Open Sans', sans-serif;
                }
            
            `}</style>
        </React.Fragment>

    )
});


export default ProfileDropdown;

