import React, {useState} from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import axios from 'axios';
import Router from 'next/router';
import LoginMessage from '../components/LoginMessage';
import Cookies from 'js-cookie';
import {baseUrl} from '../components/Services';


const RecipeForm = () => {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [ingredientList, setIngredientList] = useState([])
    const [ingredient, setIngredient] = useState('')
    const [quantity, setQuantity] = useState('')
    const [alert, setAlert] = useState(false)

    const token = Cookies.get('token')
   
    const handleAddIngredient=(e)=>{
        e.preventDefault()
        let tempIngredientList = ingredientList
        let ingredientObject = {}
        ingredientObject["item"]=ingredient
        ingredientObject["quantity"]=quantity
        tempIngredientList.push(ingredientObject)
        setIngredientList(tempIngredientList)
       setAlert(true)
       setTimeout(()=>{
           setAlert(false)
       }, 2000)
        setIngredient('')
        setQuantity('')
    }
 
    const handleSubmit = async(e) => {
        e.preventDefault()

        const data ={
            "title": title,
            "ingredients": ingredientList,
            "method": method,
        }
        const headers = {
            'Content-Type': 'application/json',
             Authorization: `Token ${token}`
        }
        try{
            const response = await axios.post(`${baseUrl}recipes/add_recipe/`, 
                data, 
                {headers}
            )
            if(response.status===201){
                console.log('success')
                Router.push({
                  pathname: '/response'
                })
              }
            }
        catch(error){
            console.log(error)
        }
    }

    return(
        <Layout>
            <Head>
                <title>Add A Recipe </title>
            </Head>
            {token &&
            <form>
                <div className="form-group">
                    <label htmlFor="recipe-title" className="font-weight-bold">Name of Recipe:</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="recipe-title" 
                        className="form-control" 
                        onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                  
                <div className="form-group">
                    <label htmlFor="method" className="font-weight-bold">Method:</label>
                    <textarea 
                        rows="10" 
                        name="method" 
                        id="method" 
                        className="form-control"
                        onChange={(e)=> setMethod(e.target.value)}/>
                </div>
                <div className="ingredients-container">
                <p className="font-weight-bold">Add Ingredients:</p>
                <div className="form-inline">
                    <input 
                        type="text" 
                        id="ingredient" 
                        placeholder="name of ingredient" 
                        className="form-control mb-2 mr-sm-2"
                        value={ingredient}
                        onChange={(e)=>setIngredient(e.target.value)}
                        />
                    <input 
                        type="text" 
                        placeholder="quantity" 
                        id="quantity" 
                        className="form-control mb-2 mr-sm-2"
                        value={quantity}
                        onChange={(e)=> setQuantity(e.target.value)}/>
                            
                    <button 
                        onClick={handleAddIngredient} 
                        className="btn btn-primary" >
                            Add ingredient
                    </button>
                    {alert&&
                            <div className="alert alert-success" role="alert">
                            Added! 
                            </div>
                            }
                    
                </div>
            
                <button 
                    onClick={handleSubmit} 
                    className="btn btn-primary mb-2">
                        Submit Recipe
                </button>
                
                </div>
            </form>
            }
            {!token && <LoginMessage/>}
            
            
            <style jsx>{`
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
              
                `}
            </style>
        </Layout>
    )
}

export default RecipeForm;
