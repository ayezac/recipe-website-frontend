import React, { useState } from "react";
import Layout from "../components/Layout";
import LoginMessage from "../components/LoginMessage";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import { baseUrl } from "../components/Services";
import Cookies from "js-cookie";

const MyRecipes = props => {
  const [deleted, setDeleted] = useState(false);
  const username = Cookies.get("username");
  const myrecipes = props.recipes.filter(
    recipe => recipe.author.username === username
  );

  const token = Cookies.get("token");

  return (
    <Layout>
      <Head>
        <title>My Recipes</title>
        <link
          href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      {token && (
        <div>
          <header>
            <h1>My Recipes</h1>
          </header>
          <ul className="d-flex flex-row justify-content-center">
            {myrecipes.map(recipe => (
              <li className="card" key={recipe.id}>
                <Link href={`/recipes/[id]`} as={`/recipes/${recipe.id}`}>
                  <a>{recipe.title}</a>
                </Link>
                <img src={recipe.image} alt="recipe image"/>
                {/* Delete button and function */}
                <button
                  onClick={async () => {
                    const response = await axios.delete(
                      `${baseUrl}recipes/${recipe.id}`
                    );
                    if (response.status === 204) {
                      setDeleted(true);
                      setTimeout(() => {
                        setDeleted(false);
                      }, 1500);
                      Router.push({
                        pathname: "/myrecipes"
                      });
                    }
                  }}
                  className="btn btn-sm btn-danger delete-btn"
                >
                  Delete
                </button>

                {/* <Link 
                            href={`/edit/[id]`}
                            as = {`/edit/${recipe.id}`}
                        >
                            <a>Edit Recipe</a>
                        </Link> */}
              </li>
            ))}
          </ul>
        </div>
      )}
      {!token && <LoginMessage />}
      {deleted && <div className="alert alert-success">Deleted</div>}
      <style jsx>{`
        header {
          font-family: "Alata", sans-serif;
          text-align: center;
          color: #fa5091;
          text-shadow: -1px 1px #e00472, 0 1px #e00472, 1px 0 #e00472,
            0 -1px #e00472;
        }
        ul li a {
          font-size: 1.3rem;
          text-decoration: none;
          color: black;
          padding: 10px;
          margin: auto;
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
        .alert {
          width: 8%;
          position: absolute;
          left: 4%;
        }
        .card{
          width: 300px;
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

MyRecipes.getInitialProps = async function(props) {
  const result = await axios.get(`${baseUrl}recipes/recipe_list/`);
  const data = await result.data;
  return {
    recipes: data
  };
};
export default MyRecipes;
