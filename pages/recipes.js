import React from 'react';
import Layout from '../components/Layout'

const Recipes = () => {
    return(
        <Layout>
            <header>
                <h1 class="fav-recipes">My Favourite Recipes</h1>
            </header>
            <main>
            <article>
                <div class="recipe-heading">
                    <h3>Pesto Pasta</h3>
                    <dl>
                        <dt>Date: 2019-11-18</dt>
                        <dt>Author: Jane Smith</dt>
                        <dt>Time to read: 5 min</dt>
                        <dt></dt>
                    </dl>
                </div>
                <div>
                    <figure>
                        <img src="pestopasta.jpg" alt="A pesto pasta meal" width="750" height="500"/>
                        <figcaption>A pesta pasta meal. Photo by Eaters Collective on Unsplash</figcaption>
                    </figure>
                </div>
            <div class="method">
                <h5>Ingredients:</h5>
                    <ul>
                        <li>2 cups basil</li>
                        <li>2 cloves garlic</li>
                        <li>1/2 teaspoon sea salt</li>
                        <li>1/4 teaspoon pepper</li>
                        <li>1 lemon, zested and juiced</li>
                        <li>6 tablespoons cashew cream</li>
                        <li>8 ounces dried spaghetti</li>
                        <li>1 handful heirloom tomatoes, chopped</li>
                    </ul>
                    <br/>
                <h5>Method:</h5>
                <p>In food processor, combine basil, garlic, salt, pepper, lemon zest and juice, and cashew cream. Purée until smooth.<br/>
                    Cook the spaghetti. Once cooked, drain, reserving a couple of tablespoons of the cooking water. <br/>
                    Stir the pesto cream sauce into the pasta, along with about 2 tablespoons of the reserved water, or enough to make a creamy sauce. Garnish with chopped heirloom tomatoes. Taste and season if necessary.
                </p>
            </div>
        </article>
       
    </main>

        </Layout>

    )
};

export default Recipes;