import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Head from "next/head";
import Router from "next/router";
import { baseUrl } from "../services/baseUrl";

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [getNewsletter, setGetNewsletter] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      country: country,
      message: message,
      get_newsletter: getNewsletter
    };

    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const response = await axios.post(`${baseUrl}polls/contact/`, data, {
        headers
      });
      if (response.status === 201) {
        Router.push({
          pathname: "/response"
        });
      }
    } catch (error) {
      setShowErrorDialog(true);
    }
  };
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <link
          href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      {showErrorDialog && (
        <div className="alert alert-danger" role="alert">
          <strong>An Error Occurred!</strong>
          Make sure you entered all the fields and try again.
        </div>
      )}
      <header>
        <h1>Contact us</h1>
      </header>
      <main>
        <form id="form" className="form-group">
          <input
            className="form-control"
            name="fullName"
            type="text"
            id="name"
            placeholder="Your Name"
            required
            onChange={e => setName(e.target.value)}
          />
          <input
            className="form-control"
            name="email"
            type="email"
            id="email"
            placeholder="Email Address"
            required
            onChange={e => setEmail(e.target.value)}
          />
          <label>Country:</label>
          <select
            name="country"
            id="country"
            className="custom-select"
            onChange={e => setCountry(e.target.value)}
          >
            <option>--</option>
            <option value="Sweden">Sweden</option>
            <option value="Norway">Norway</option>
            <option value="Finland">Finland</option>
            <option value="Denmark">Denmark</option>
          </select>

          <textarea
            id="message"
            placeholder="Type your message here"
            rows="8"
            onChange={e => setMessage(e.target.value)}
          ></textarea>
          <div className="radio-button-container">
            <p>Would you like to receive our newsletter?</p>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="yes-radio"
                name="get-newsletter"
                className="custom-control-input"
                value={true}
                onChange={e => setGetNewsletter(e.target.value)}
              />
              <label className="custom-control-label" htmlFor="yes-radio">
                Yes
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="no-radio"
                name="get-newsletter"
                className="custom-control-input"
                value={false}
                onChange={e => setGetNewsletter(e.target.value)}
              />
              <label className="custom-control-label" htmlFor="no-radio">
                No
              </label>
            </div>
          </div>

          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
      </main>
      <style jsx>{`
#form{
    display: flex;
    flex-direction: column;
    width: 600px;
    height:80%;
    margin: auto;
    padding: 40px;
    font-family: 'Noto Sans JP', sans-serif;
    border: 1px solid #f52c79;
    color: #f52c79;
    font-family: 'Open Sans', sans-serif;
}
header h1{
    color: #f52c79;
    font-size: 2.3rem;
    text-align: center;
    font-family: 'Alata', sans-serif;
}

.form-control{
  margin: 10px;
  color:#f52c79;
  border: 1px solid #f52c79;
}
::placeholder{
  color:#f52c79;
}
#form textarea{
    font-size: 16px;
    width: 100%;
    margin: 10px;
    color:#f52c79;
    border: 1px solid #f52c79;
    padding: 10px;
}
#form label{
  margin: 10px;
  color: #f52c79;
}
p{
  margin: 10px;
  font-size: 1.1rem;
  color: #f52c79;
}
button{
    background-color: #f52c79;
    color: white;
    margin: auto;
    position: relative;
    top: 20px;
    border: #f52c79;;
}
.custom-select{
  border: 1px solid #f52c79;
  background-color: #f52c79;
  color: white;
  margin: 10px;
}
 select option{
  background-color: #f52c79;
  color: white;
 }
.custom-control-input{
  width: 2rem;
  height: 2rem;
  position: relative;
  padding-right: 100px;
}
.radio-button-container{
  width: 100%;
}
.error{
  margin: auto;
  font-family: 'Open Sans', sans-serif;
  color: red;
  font-size: 0.7rem;
  border: 1px solid red;
  text-align: center;
  padding: 2px;
  width: 50%;
}
  }`}</style>
    </Layout>
  );
};

export default Contact;
