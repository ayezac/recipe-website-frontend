import React from "react";
import Layout from "../components/Layout";
import { baseUrl } from "../components/Services";
import Poll from "../components/Poll";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";

const ProfilePage = props => {
  // filtering recipes saved by user
  const my_saved_recipes = props.saved_recipes.filter(
    recipe => recipe.user.username === props.profile.username
  );

  return (
    <Layout>
      <div className="container container-fluid">
        <header className="header">
          <h1 className="username">
            {props.profile.first_name} {props.profile.last_name}
          </h1>
          <p className="user-info">{props.profile.email}</p>
        </header>

        <div className="card">
          <div className="card-body d-flex flex-row">
            <div className="card-text">
              <h2>Saved Recipes</h2>

              <ul>
                {my_saved_recipes.map(recipe => (
                  <li key={recipe.id}>
                    <Link
                      href={`/savedrecipes/[id]`}
                      as={`/savedrecipes/${recipe.id}`}
                    >
                      <a>{recipe.recipe.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <section className="poll">
                <h2>Fun Poll</h2>
                <Poll polls={props.polls} />
              </section>
          </div>
        </div>
      </div>
      <style jsx>{`
        .header {
          margin: auto;
          text-align: center;
          color: #e00472;
        }
        .user-info {
          padding: 10px;
          margin-left: 20px;
        }
        h2 {
          color: #e00472;
        }
        ul li {
          color: #e00472;
        }
        ul li a {
          color: var(--font-color);
        }
        .card {
          border: 1px solid #6e6e6e;
          box-shadow: 5px 5px 5px #6e6e6e;
        }
        .card-body{
          justify-content: space-around; 
        }
      `}</style>
    </Layout>
  );
};

export default ProfilePage;

ProfilePage.getInitialProps = async function(props) {
  const userId = Cookies.get("id");

  const result = await axios.get(`${baseUrl}user/${userId}/`);
  const saved_recipes = await axios.get(`${baseUrl}recipes/saved_recipe_list/`);
  const pollQuestions = await axios.get(`${baseUrl}polls/questions/`);
  const profileData = await result.data;
  const saved_recipes_data = await saved_recipes.data;
  const poll_data = await pollQuestions.data;
  return {
    profile: profileData,
    saved_recipes: saved_recipes_data,
    polls: poll_data,
  };
};