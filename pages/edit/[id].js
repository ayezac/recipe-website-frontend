import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import axios from "axios";
import Router from "next/router";
import LoginMessage from "../../components/Login/LoginMessage";
import Cookies from "js-cookie";
import { baseUrl } from "../../services/baseUrl";

const EditRecipe = props => {
  const [title, setTitle] = useState(props.recipe.title);
  const [image, setImage] = useState(props.recipe.image);
  const [method, setMethod] = useState(props.recipe.method);
  const [ingredientList, setIngredientList] = useState(
    props.recipe.ingredients
  );
  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("");
  const [alert, setAlert] = useState(false);

  const token = Cookies.get("token");

  const handleChangeImage = async e => {
    e.preventDefault();
    const newImage = e.target.files[0] || image;
    const toBase64 = newImage =>
      new Promise((resolve, reject) => {
        let blob = new Blob([newImage], { type: "text/plain" });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    setImage(await toBase64(newImage));
    console.log(image);
  };

  const handleAddIngredient = e => {
    e.preventDefault();
    let ingredientObject = {};
    ingredientObject["item"] = ingredient;
    ingredientObject["quantity"] = quantity;
    ingredientList.push(ingredientObject);
    setIngredientList(ingredientList);
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
    setIngredient("");
    setQuantity("");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let data;
    if (image === props.recipe.image) {
      data = {
        title: title,
        ingredients: ingredientList,
        method: method,
        id: props.recipe.id
      };
    } else {
      data = {
        title: title,
        image: image,
        ingredients: ingredientList,
        method: method,
        id: props.recipe.id
      };
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    try {
      const response = await axios.put(
        `${baseUrl}recipes/${props.recipe.id}/`,
        data,
        { headers }
      );
      if (response.status === 200) {
        Router.push({
          pathname: "/myrecipes"
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Edit your Recipe </title>
      </Head>

      {token && (
        <form>
          <div className="form-group">
            <label htmlFor="recipe-title" className="font-weight-bold">
              Name of Recipe:
            </label>
            <input
              type="text"
              name="title"
              id="recipe-title"
              className="form-control"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          {image ? (
            <img className="img-fluid img-thumbnail" src={image} />
          ) : (
            <p>No image uploaded</p>
          )}
          <>
            {/* <p className="alert alert-info">**Required** <br/>Please upload an image again</p> */}
            <div className="form-group">
              <label htmlFor="recipe-image" className="font-weight-bold">
                Change/Upload the Image for your Recipe
              </label>
              <input
                required={false}
                type="file"
                name="recipe-image"
                accept="file_extension|image/*"
                className="form-control"
                onChange={
                  handleChangeImage
                  //   e => {
                  //   setImage(e.target.files[0]);
                  // }
                }
              />
            </div>
          </>

          <div className="form-group">
            <label htmlFor="method" className="font-weight-bold">
              Method:
            </label>
            <textarea
              rows="10"
              name="method"
              id="method"
              className="form-control"
              value={method}
              onChange={e => setMethod(e.target.value)}
            />
          </div>
          <div className="ingredients-container">
            {ingredientList.map(ingredientData => (
              <div className="form-inline" key={ingredientData.id}>
                <p>
                  {ingredientData.quantity}
                  {"  "}
                  {ingredientData.item}
                </p>

                <button
                  onClick={async e => {
                    e.preventDefault();
                    const index = ingredientList.indexOf(ingredientData);
                    ingredientList.splice(index, 1);
                    setIngredientList(ingredientList);
                  }}
                  className="btn btn-primary btn-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* To add additional ingredients */}
          <div className="ingredients-container">
            <p className="font-weight-bold">Add Ingredients:</p>
            <div className="form-inline">
              <input
                type="text"
                id="ingredient"
                placeholder="name of ingredient"
                className="form-control mb-2 mr-sm-2"
                value={ingredient}
                onChange={e => setIngredient(e.target.value)}
              />
              <input
                type="text"
                placeholder="quantity"
                id="quantity"
                className="form-control mb-2 mr-sm-2"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              />

              <button onClick={handleAddIngredient} className="btn btn-primary">
                Add ingredient
              </button>
              {alert && (
                <div className="alert alert-success" role="alert">
                  Added!
                </div>
              )}
            </div>

            <button onClick={handleSubmit} className="btn btn-primary mb-2">
              Submit Recipe
            </button>
          </div>
        </form>
      )}

      {!token && <LoginMessage />}

      <style jsx>
        {`
                form{
                   width: 70%;
                   margin: auto;
                   text-align: center;
                   color: #fa5091;
                }
                .btn{
                   margin: 20px;
                   background-color: #fa5091;
                   border: 1px solid #fa5091;
                }
                .form-inline{
                    width:800px;
                    margin: auto;
                    text-align: center;
                }
                .ingredient-container{
                    background
                }
                .alert{
                    display: inline-block;
                }
                .toggle{
                  position: relative;
                  right: 26rem;
                }
                img{
                  max-width: 300px;
                }
              
                `}
      </style>
    </Layout>
  );
};

EditRecipe.getInitialProps = async function(props) {
  const result = await axios.get(`${baseUrl}recipes/${props.query.id}/`);
  const data = await result.data;
  return {
    recipe: data
  };
};

export default EditRecipe;
