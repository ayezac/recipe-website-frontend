import React from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Head from "next/head";
import { baseUrl } from "../components/Services";

const Home = props => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link
          href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <div className="main">
          <header>
            <h1>MY RECIPE BOOK</h1>
          </header>
          <figure>
            <img src="recipe-book.gif" alt="A recipe book" />
          </figure>
        </div>
      </main>

      <style jsx>{`
        h1 {
          font-family: "Alata", sans-serif;
          text-align: center;
          font-size: 4rem;
          margin: 10px;
          color: #fa5091;
          text-shadow: -1px 5px #e00472, 0 2px #e00472, 1px 0 #e00472,
            0 -1px #e00472;
        }
        main {
          width: 95vw;
          margin: auto;
        }
        .main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        figure {
          margin: auto;
        }
        img {
          width: 30vw;
          margin: auto;
        }
        .about-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          color: black;
          max-width: 80%;
          margin: auto;
        }
        .text {
          padding: 10px;
          width: 40%;
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        }
        .text h3 {
          font-size: 1.5rem;
          text-align: center;
          color: #fa5091;
          font-family: "Alata", sans-serif;
        }
        .text p {
          font-size: 0.9rem;
          font-family: "Open Sans", sans-serif;
        }
        .poll {
          padding: 5px;
          width: 40%;
          height: 100%;
        }

        // @media only screen and (max-width: 1024px){
        //   .main {
        //   display: flex;
        //   flex-direction: column;
        //   justify-content: center;
        //   align-items: center;
        //   font-size: 1rem;
        //   }
        //   main h1{
        //     font-size: 5rem;
        //   }
        //   .text p{
        //     0.7rem;
        //   }

        // }
      `}</style>
    </Layout>
  );
};


export default Home;
