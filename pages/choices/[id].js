import React, { useState } from "react";
import axios from "axios";
import Router from "next/router";
import Head from "next/head";
import Layout from "../../components/Layout";
import { baseUrl } from "../../services/baseUrl";

const Question = props => {
  const [choiceChosen, setChoiceChosen] = useState(0);

  const handleInputChange = e => {
    setChoiceChosen(e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      choice: choiceChosen
    };
    const headers = {
      "Content-Type": "application/json"
    };
    const response = await axios.post(
      `${baseUrl}polls/questions/${props.polls.id}/vote`,
      data,
      { headers }
    );
    if (response.status === 200) {
      console.log(response);
      Router.push({
        pathname: "/pollresults"
      });
    } else {
      console.log(response.error);
    }
  };
  return (
    <Layout>
      <Head>
        <title>Poll</title>
        <link
          href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <h2>{props.polls.question_text}</h2>
        {props.polls.choices.map(choice => (
          <label key={choice.id}>
            <input
              type="radio"
              name="choices"
              value={choice.id}
              onChange={handleInputChange}
            />
            <p>{choice.choice_text}</p>
          </label>
        ))}
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </main>

      <style jsx>{`
        h2 {
          padding-top: 30px;
          text-align: center;
          font-family: "Alata", sans-serif;
          font-size: 2rem;
          color: #db125f;
        }
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: Tahoma;
        }
        main label {
          display: flex;
          flex-direction: row;
          border: 1px solid #db125f;
          color: #db125f;
          padding-top: 20px;
          padding-left: 20px;
          width: 20vw;
          margin: 10px;
          font-family: "Open Sans", sans-serif;
          font-size: 1rem;
        }
        input[type="radio"] {
          width: 1.8rem;
          height: 1.8rem;
        }

        .btn {
          width: 170px;
          height: 40px;
          text-align: center;
          margin-top: 30px;
          color: #db125f;
          border: 2px solid #db125f;
          background-color: white;
          font-size: 1rem;
        }
        .btn:hover {
          background-color: #db125f;
          color: white;
        }
        #results {
          position: relative;
          top: 30px;
        }
      `}</style>
    </Layout>
  );
};

export default Question;

Question.getInitialProps = async function(props) {
  const result = await axios.get(`${baseUrl}polls/questions/${props.query.id}`);
  const data = await result.data;
  console.log(`Show data fetched. ${data}`);
  return {
    polls: data
  };
};
