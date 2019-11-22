import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Poll from '../components/Poll';
import axios from 'axios';

const Home = (props) => (
  <Layout>
    <header>
      <h1>RECIPES</h1>
    </header>
    <main>
        <section className="main">
        <h1>Explore Our Recipes</h1>
        <figure>
            <img src="/main-food-image.jpg" alt="A meal"/>
            <figcaption>Photo by Alex Munsell on Unsplash</figcaption>
        </figure>
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
        </section>
        <section className="poll">
          <Poll polls={props.polls}/>  
        </section>
    </main>
    <footer>&copy; 2019</footer> 

    <style jsx>{`
    header {
        font-family:  'Raleway', sans-serif;
        text-align: center;
        color: #3C5580;
        font-size: 2rem;
        margin: 20px;
    }
    main {
      display: flex;
      flex-direction: row;
    }

    main h1{
        color: #3C5580;
        text-align: center;
        font-size: 2.5rem;
    }
     .main{
       width: 60vw;
     }
    figcaption{
      text-align: center;
    }
    figure {
      width: 810px;
      margin: auto;
    }
    figure img {
        width: 800px;
        height: 530px;
    }
    .text h3{
        font-size: 2rem;
        text-align: center;
    }
    .text{
      font-size: 1.3rem;
    }
    .poll{
      border: 1px solid #3C5580;
      margin: 20px;
      padding: 10px;
      width: 28vw;
      position:relative;
      top: 10px;
      height: 80%;

    }
    
    footer{
        background-color: #3C5580;
        height: 30px;
        width: 100%;
        color: #fff;
        padding: 10px;
    }
    `}</style>
  </Layout>
);

Home.getInitialProps = async function(props) {
  const result = await axios.get('http://yoshi.willandskill.eu:8555/polls/questions/');
  const data = await result.data;
  console.log(`Show data fetched. ${data}`)
  return {
      polls:data.slice(0,4)
  }
}

export default Home;
