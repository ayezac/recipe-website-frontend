import React from "react";
import Layout from "../components/Layout";

const Response = () => {
  return (
    <Layout>
      <h2>Thank you! Your response was recorded.</h2>
      <style jsx>
        {`
          h2 {
            text-align: center;
            background-color: #fa5091;
            color: white;
            height: 100px;
            width: 400px;
            margin: auto;
          }
        `}
      </style>
    </Layout>
  );
};

export default Response;
