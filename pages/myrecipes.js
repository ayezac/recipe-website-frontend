import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';
import {baseUrl} from '../components/Services';
import Cookies from 'js-cookie';


const MyRecipes = (props) => {
    const username = Cookies.get('username')
    const myrecipes = props.recipes.filter(recipe => recipe.author.username === username)

    return(
        <Layout>
            <Head>
                <title>My Recipes</title>
                <link href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap" rel="stylesheet"/>
            </Head>
            <header>
                <h1>My Recipes</h1>
            </header>
                <div>
                   
                    <ul>
                        {myrecipes.map(recipe => 
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
                    color: #fa5091;
                    text-shadow: -1px 1px #e00472, 0 1px #e00472, 1px 0 #e00472, 0 -1px #e00472;
                }
                ul a{
                    font-size: 1.3rem;
                    text-decoration:none;
                    color: black;
                    padding: 10px;
                }
                ul a:hover{
                    color:#e00472;
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

MyRecipes.getInitialProps = async function(props){
    const result = await axios.get(`${baseUrl}recipes/recipe_list/`);
    const data = await result.data
    return {
        recipes: data,
    }   
   
}
export default MyRecipes;
