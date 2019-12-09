import React from 'react';
import Link from 'next/link';

const RecipeList = React.forwardRef((props,ref) => {
   
    
  
    return(
        <React.Fragment>
            <div className="recipe-dropdown" ref={ref}>
                <Link href="/recipes" as="/recipe-list">
                    <a>List of Recipes</a>
                </Link>
                <Link href="/recipeForm">
                    <a>Add A Recipe</a>
                </Link>
            </div>
            <style jsx>{`
                .recipe-dropdown{
                    position: absolute;
                    left: 45%;
                    top: 7%;
                    background-color:#3C5580;
                    padding: 10px;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;

                }
                 a{
                    font-size: 1rem;
                    text-decoration:none;
                    color: white;
                    padding: 10px;
                    margin: 5px;
                    list-style: none;
                    font-family: 'Open Sans', sans-serif;
                }
            
            `}</style>
        </React.Fragment>

    )
});


export default RecipeList;

