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
                        {props.profile.first_name} 
                        {props.profile.last_name}
                </h1>
                <div className="card">
  
                <div className="card-body">
                    <h4 className="card-title">{props.profile.first_name} {props.profile.last_name}</h4>
                    <p className="card-text">
                        Email: {props.profile.email}
                    </p>
                </div>

            </div>
            </div>
 
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