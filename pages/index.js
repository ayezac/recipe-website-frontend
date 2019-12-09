import React from 'react';
import Layout from '../components/Layout';
import Poll from '../components/Poll';
import axios from 'axios';
import Head from 'next/head'
import {baseUrl} from '../components/Services';

const Home = (props) => {

  return(
  <Layout>
    <Head>
      <title>Home</title>
      <link href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap" rel="stylesheet"></link>
    </Head>
    <main>
    <header>
      <h1>RECIPES</h1>
    </header>
        <h1>Explore Our Recipes</h1>
        <div className="main">
        <figure>
            <img src="/main-food-image.jpg" alt="A meal" className="img-thumbnail"/>
            <figcaption>Photo by Alex Munsell on Unsplash</figcaption>
        </figure>
        <section className="poll">
          <Poll polls={props.polls}/>  
        </section>
        </div>
        <section className="text">
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Qui dicta minus molestiae vel beatae 
            natus eveniet ratione temporibus aperiam harum alias officiis 
            assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
          </p>
          <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam 
            tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates 
            rem at neque quos facere sequi unde optio aliquam!</p>
          <p>Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro 
            quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam 
            nulla unde amet odit pariatur at!</p>
          <p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil 
            explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis 
            optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>    
        </section>
    </main>

    <style jsx>{`
    header {
      font-family: 'Alata', sans-serif;
        text-align: center;
        color: #3C5580;
        font-size: 2rem;
        margin: 20px;
    }
    main{
      width: 95vw;
      margin: auto;
    }

    main h1{
        color: #3C5580;
        text-align: center;
        font-size: 2.5rem;
        font-family: 'Alata', sans-serif;
    }
     .main{
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-items: center;
       width: 100%;
     }
    figcaption{
      text-align: center;
    }
    figure {
      width: 90vw;
      margin: auto;
    }

    .text h3{
        font-size: 2rem;
        text-align: center;
        font-family: 'Alata', sans-serif;
    }
    .text p{
      font-size: 1rem;
      font-family: 'Open Sans', sans-serif;
    }
    .poll{
      border: 1px solid #3C5580;
      margin: 20px;
      padding: 10px;
      width:50%;
      height: 90%;

    }
    
    @media only screen and (max-width: 1400px){
      .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      }
      main h1{
        font-size: 2rem;
      }
      .text p{
        0.7rem;
      }

    }
    `}</style>
  </Layout>
)};

Home.getInitialProps = async function(props) {
  const result = await axios.get(`${baseUrl}polls/questions/`);
  const pollData = await result.data;
  return {
      polls:pollData,
  }
}

export default Home;
