import React from 'react';
import Layout from '../components/Layout';

const Response = () =>{
    return(
        <Layout>
            <h2>Thank you! Your response was recorded.</h2>
            <style jsx>{`
          h2{
            text-align: center;
          }

            `}
        </style>
        </Layout>
    )
}

export default Response;