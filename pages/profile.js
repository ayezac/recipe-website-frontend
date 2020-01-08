import React from 'react';
import Layout from '../components/Layout';
import {baseUrl} from '../components/Services';
import axios from 'axios';
import Cookies from 'js-cookie';


const ProfilePage = (props) => {
    return(
        <Layout>
            <div className="container container-fluid">
                <h1 
                    className="jumbotron">
                        {props.profile.first_name}{' '}
                        {props.profile.last_name}
                </h1>
                <div className="card">
  
                <div className="card-body">
                    
                    <p className="card-text">
                        <strong>UserName:</strong> {props.profile.username}
                        <br/>
                        <strong>Email:</strong> {props.profile.email}
                    </p>
                </div>

            </div>
            </div>
    <style jsx>{`
    .jumbotron{
        width: 60%;
        margin: auto;
        text-align: center;
        color:#e00472;
    }
    .card{
        margin: auto;
        border: 1px solid #e00472;
        width: 350px;
        padding: 30px;
        postion: relative;
        top: 30px;
    }
    `}</style>
 
        </Layout>
    )
};

export default ProfilePage

ProfilePage.getInitialProps = async function(props) {
    const userId = Cookies.get("id")

    const result = await axios.get(`${baseUrl}user/${userId}/`);
    const profileData = await result.data;
    return {
        profile:profileData,
    }
  }