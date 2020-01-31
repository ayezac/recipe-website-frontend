import React, { useState } from "react";
import Layout from "../../components/Layout";
import LoginMessage from "../../components/LoginMessage";
import Head from "next/head";
import axios from "axios";
import moment from "moment";
import Cookies from "js-cookie";
import { baseUrl } from "../../services/baseUrl";

const RecipeDetail = props => {
  const [isSaved, setIsSaved] = useState(false);
  const [recipeAlreadySaved, setRecipeAlreadySaved] = useState(false);
  const token = Cookies.get("token");

  const handleClick = async e => {
    e.preventDefault();
    const data = {
      recipe: props.recipe.id
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    try {
      const res = await axios.post(`${baseUrl}recipes/save_recipe/`, data, {
        headers
      });
      if (res.status === 201) {
        setIsSaved(true);
      }
      if (
        res.data.message ===
        "UNIQUE constraint failed: recipes_savedrecipe.recipe_id, recipes_savedrecipe.user_id"
      ) {
        setRecipeAlreadySaved(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>{props.recipe.title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      {token && (
        <article>
          <h1>{props.recipe.title}</h1>
          {!isSaved && !recipeAlreadySaved && (
            <button className="btn btn-primary" onClick={handleClick}>
              Save Recipe
            </button>
          )}
          {isSaved && <button className="btn btn-success">Saved</button>}
          {recipeAlreadySaved && (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={() => {
                  setRecipeAlreadySaved(false);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              You have already saved this recipe!
            </div>
          )}
          <dl>
            <dt>
              Date added: {moment(props.recipe.pub_date).format("YYYY-MM-DD")}
            </dt>
            <dt>Author: {props.recipe.author.username}</dt>
          </dl>
          <div className="recipe-container">
            <div className="ingredients">
              <h3>Ingredients</h3>
              <table>
                <thead>
                  <tr>
                    <th>
                      <strong>Name of Ingredient</strong>
                    </th>
                    <th>
                      <strong>Quantity</strong>
                    </th>
                  </tr>
                </thead>
                {props.recipe.ingredients.map(ingredient => (
                  <tbody key={ingredient.id}>
                    <tr>
                      <td>{ingredient.item}</td>
                      <td>{ingredient.quantity}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>

            <br />
            <div className="method">
              <h3>Method:</h3>
              <p>{props.recipe.method}</p>
            </div>
          </div>
        </article>
      )}
      {!token && <LoginMessage />}

      <style jsx>
        {`
          article {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: "Open Sans", sans-serif;
          }
          .btn-primary {
            background-color: #fa5091;
            border: #db125f;
            margin-bottom: 10px;
          }
          table {
            width: 300px;
            margin: auto;
            border: 1px solid #fa5091;
            font-size: 0.9rem;
          }
          tr {
            border: 1px solid #fa5091;
          }
          td {
            padding: 5px;
            border: 1px solid #fa5091;
          }
          th {
            color: #db125f;
            padding: 10px;
            font-size: 1rem;
          }

          .recipe-container {
            text-align: center;
            width: 80%;
            display: flex;
            flex-direction: row;
          }
          .method {
            margin-left: 100px;
          }
          h1 {
            font-size: 2rem;
            color: #db125f;
            text-shadow: -1px 1px #e00472, 0 1px #e00472, 1px 0 #e00472,
              0 -1px #e00472;
          }
          h3 {
            color: #db125f;
          }
          dl {
            font-size: 0.8rem;
          }
          .list-group-item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: auto;
            width: 60%;
          }
        `}
      </style>
    </Layout>
  );
};

RecipeDetail.getInitialProps = async function(props) {
  const result = await axios.get(`${baseUrl}recipes/${props.query.id}/`);
  const data = await result.data;
  return {
    recipe: data
  };
};

export default RecipeDetail;
