import React from "react";
import Layout from "../components/Layout";
import LoginContainer from "../components/Login/LoginContainer";

const LoginPage = () => {
  return (
    <Layout>
      <main>
        <div className="welcome">
          <div className="text">
            <h1>Welcome Back!</h1>
            <p>Login to continue</p>
            <figure>
              <img src="recipe-book.gif" alt="A drawing of a recipe book" />
            </figure>
          </div>
        </div>
        <LoginContainer className="login-container" />
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }
        .welcome {
          border: solid;
          width: 50%;
          height: 100vh;
          background-color: #db125f;
          color: white;
          text-align: center;
        }
        .text {
          position: relative;
          top: 30%;
        }

        img {
          width: 15vw;
          border-radius: 100%;
        }
      `}</style>
    </Layout>
  );
};

export default LoginPage;
