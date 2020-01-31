import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import axios from "axios";
import { baseUrl } from "../services/baseUrl";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = async e => {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      username: userName,
      password: password,
      email: email
    };
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const res = await axios.post(`${baseUrl}user/register/`, data, {
        headers
      });
      if (res.status === 201) {
        console.log(res);
        Router.push({
          pathname: "/login"
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div>
          <h3>Sign Up Here</h3>
        </div>
        <form className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            onChange={e => setFirstName(e.target.value)}
          />
          <label htmlFor="last-name">Last name</label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            onChange={e => setLastName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={e => setUserName(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
      </div>
      <style jsx>{`
        .container {
          width: 500px;
          height: 700px;
          display: flex;
          flex-direction: column;
        }
        div h3 {
          text-align: center;
        }
        .btn {
          margin-top: 20px;
        }
      `}</style>
    </Layout>
  );
};

export default SignUp;
