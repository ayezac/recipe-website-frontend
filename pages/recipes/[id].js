import React from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';
import axios from 'axios';
import moment from 'moment';
import {baseUrl} from '../../components/Services';

const RecipeDetail = (props) => {

    return(
    <Layout>
        <Head>
            <title>{props.recipe.title}</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
        </Head>
        <article>
            <h1>{props.recipe.title}</h1>
        <dl>
            <dt>Date added: {moment(props.recipe.pub_date).format('YYYY-MM-DD')}</dt>
            <dt>Author: {props.recipe.author.username}</dt>
        </dl>
            <div className="method">
                <h3>Ingredients</h3>
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th>Name of Ingredient</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    {props.recipe.ingredients.map(ingredient =>
                        <tbody key={ingredient.id}>
                        <tr>
                            <td>{ingredient.item}</td>
                            <td>{ingredient.quantity}</td>
                        </tr>
                        </tbody>
                        )}
                </table>
                
                    <br/>
                <h3>Method:</h3>
                <p>{props.recipe.method}</p>
            </div>
            </article>
 
            <style jsx>
                {`
                    article{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        font-family: 'Open Sans', sans-serif;
                    }
                    .table{
                        width: 400px;
                        margin: auto;
                    }
                
                    .method{
                        text-align: center;
                        width: 70%;
                    }
                    h1{
                        font-size: 2rem;
                    }
                    dl{
                        font-size: 0.8rem;
                    }
                    .list-group-item{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        margin: auto;
                        width: 60%;
                    }
                `}
            </style>
       
    </Layout>
    )
}

RecipeDetail.getInitialProps = async function(props){
    const result = await axios.get(`${baseUrl}recipes/${props.query.id}/`);
    const data = await result.data
    return {
        recipe: data,
    }
};

export default RecipeDetail;