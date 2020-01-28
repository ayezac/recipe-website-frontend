import React from "react";
import Layout from "../components/Layout";
import Poll from "../components/Poll";
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
            <img src="recipe-book.gif" alt="A drawing of a recipe book" />
          </figure>
        </div>
        <div className="about-container">
          <section className="text">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
            <p>
              Ad dolore dignissimos asperiores dicta facere optio quod commodi
              nam tempore recusandae. Rerum sed nulla eum vero expedita ex
              delectus voluptates rem at neque quos facere sequi unde optio
              aliquam!
            </p>
          </section>
          <section className="poll">
            <Poll polls={props.polls} />
          </section>
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
          width: 40vw;
          margin: auto;
        }
        .about-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          color: black;
          border: 1px solid #db125f;
        }
        .text {
          padding: 10px;
          width: 40%;
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

Home.getInitialProps = async function(props) {
  const result = await axios.get(`${baseUrl}polls/questions/`);
  const pollData = await result.data;
  return {
    polls: pollData.slice(0, 4)
  };
};

export default Home;
