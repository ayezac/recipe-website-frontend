import React from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Head from "next/head";
import { baseUrl } from "../services/baseUrl";

const Results = props => {
  return (
    <Layout>
      <Head>
        <title>Poll Results</title>
        <link
          href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <h1>Results</h1>
        <ul>
                    {" "}
          {props.polls.map(poll => (
            <li className="results" key={poll.id}>
              <p id="questions">{poll.question_text}</p>
                          
              <table>
                <thead>
                  <tr>
                    <th>Choice</th>
                    <th>Votes</th>
                  </tr>
                </thead>
                {poll.choices.map(choice => (
                  <tbody key={choice.id}>
                    <tr>
                      <td>{choice.choice_text}</td>
                      <td>{choice.votes}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .container {
          text-align: center;
        }
        span {
          padding: 10px;
        }
        h1 {
          color: #db125f;
        }
        .results {
          list-style: none;
          padding: 20px;
          margin: auto;
          border-bottom: 1px solid;
        }
        #questions {
          color: #db125f;
          font-size: 1.5rem;
          font-family: "Alata", sans-serif;
        }
        table {
          width: 500px;
          margin: auto;
          border: 1px solid #db125f;
        }
        thead tr {
          padding: 20px;
          color: #db125f;
        }
        tr {
          border: 1px solid #db125f;
          padding: 20px;
        }
        td {
          border: 1px solid #db125f;
        }
      `}</style>
    </Layout>
  );
};

export default Results;

Results.getInitialProps = async function(props) {
  const result = await axios.get(`${baseUrl}polls/questions/`);
  const data = await result.data;
  console.log(`Show data fetched. ${data}`);
  return {
    polls: data.slice(0, 4)
  };
};
