import React, {useState}  from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';
import {baseUrl} from '../components/Services';

const FindRecipes = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [recipes, setRecipes] = useState([])

    const handleSearch = async(e) => {
         e.preventDefault();
         const result = await axios.get(`${baseUrl}recipes/recipe_list/?search=${searchTerm}`);
         const data = await result.data;
        setRecipes(data);
     }

    return(
        <Layout>
            <Head>
                <title>Find Recipes</title>
                <link href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap" rel="stylesheet"/>
            </Head>
            
            <header>
                <h1>Find Recipes</h1>
            </header>
            {/* Search Bar */}
                <div>
                <div className="input-group input-group-lg">
                <input 
                    type="text" 
                    className="form-control" 
                    aria-label="search-term" 
                    onChange={(e)=> setSearchTerm(e.target.value)}
                    />
                <div className="input-group-append">
                    <button 
                        className="btn btn-primary" 
                        type="button"
                        onClick={handleSearch}
                        >
                            Find Recipe
                    </button>
                </div>
            </div>
                  {/* Search Results  */}
                    <ul>
                        {recipes.map(recipe => 
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
                .input-group{
                    width: 60%;
                    margin: auto;
                }
                .form-control{
                    border: 1px solid #e00472;
                }
                .btn{
                    background-color:  #e00472;
                    border-color:  #e00472;
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


export default FindRecipes;
