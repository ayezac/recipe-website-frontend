import React, { useState} from "react";
import Layout from "../components/Layout";
import LoginMessage from "../components/LoginMessage";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import { baseUrl } from "../components/Services";

const Recipes = props => {

  const token = Cookies.get("token");

  return (
    <Layout>
      <Head>
        <title>Recipes</title>
        <link
          href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      {token && (
        <div>
          <header>
            <h1>All Recipes</h1>
          </header>

          <ul className="d-flex flex-row flex-wrap justify-content-center">
            {props.recipes.map(recipe => (
              <li className="card" key={recipe.id}>
                <Link href={`/recipes/[id]`} as={`/recipes/${recipe.id}`}>
                  <a>{recipe.title}</a>
                </Link>
                <img className="flex-shrink-0 flex-grow-0" src={recipe.image} alt="recipe image"/>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!token && <LoginMessage />}
      <style jsx>{`
        header {
          font-family: "Alata", sans-serif;
          text-align: center;
          color: #fa5091;
          text-shadow: -1px 1px #e00472, 0 1px #e00472, 1px 0 #e00472,
            0 -1px #e00472;
        }
        ul a {
          font-size: 1.3rem;
          text-decoration: none;
          color: var(--font-color);
          padding: 10px;
          text-align: center;
        }
        ul a:hover {
          color: #e00472;
        }
        ul li {
          padding: 10px;
          margin: 5px;
          list-style: none;
          font-family: "Open Sans", sans-serif;
        }
        .card{
          width: 350px;
        }
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>
    </Layout>
  );
};

Recipes.getInitialProps = async function(props) {
  const result = await axios.get(`${baseUrl}recipes/recipe_list/`);
  const data = await result.data;
  console.log(data);
  return {
    recipes: data
  };
};
export default Recipes;
