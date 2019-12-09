import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';
import {baseUrl} from '../components/Services';

const Recipes = (props) => {

    return(
        <Layout>
            <Head>
                <title>Recipe List</title>
                <link href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap" rel="stylesheet"/>
            </Head>
            <header>
                <h1>Recipe List</h1>
            </header>
                <div>
                   
                    <ul>
                        {props.recipes.map(recipe => 
                        <li key={recipe.id}>
                        <Link 
                            href={`/recipes/[id]`}
                            as = {`/recipes/${recipe.id}`}
                        >
                            <a>{recipe.title}</a>
                            </Link>
                        </li>
                    )} 
                    </ul>
                </div>
                <style jsx>{`
                header{
                    font-family: 'Alata', sans-serif;
                    text-align: center;
                }
                ul a{
                    font-size: 1.3rem;
                    text-decoration:none;
                    color: black;
                    padding: 10px;
                }
                ul a:hover{
                    color:#3C5580;
                }
                ul li{
                    padding: 10px;
                    margin: 5px;
                    list-style: none;
                    font-family: 'Open Sans', sans-serif;
                }
                `}</style>

        </Layout>

    )
};

Recipes.getInitialProps = async function(props){
    const result = await axios.get(`${baseUrl}recipes/recipe_list/`);
    const data = await result.data
    return {
        recipes: data,
    }   
}
export default Recipes;
