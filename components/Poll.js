import React from "react";
import Link from "next/link";
import Head from "next/head";

const Poll = props => {
  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
      </Head>
      <main id="container">
        <form>
          <ul className="list-group">
            {props.polls.map(poll => (
              <li className="questions list-group-item" key={poll.id}>
                <Link href={`/choices/[id]`} as={`/choices/${poll.id}`}>
                  <a className="display-5">{poll.question_text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </form>

        <style jsx>{`
          #container {
            width: 90%;
            margin: auto;
            padding-top: 20px;
          }

          .questions {
            list-style: none;
            text-align: center;
            font-size: 1rem;
            border: 1px solid #db125f;
            margin-bottom: 10px;
            padding-bottom: 10px;
            font-family: "Open Sans", sans-serif;
          }
          li a {
            text-decoration: none;
            color: black;
            font-size: 1rem;
          }
          li a:hover {
            color: #fc0384;
          }
          input[type="radio"] {
            width: 1.5rem;
            height: 1.5rem;
            position: relative;
            top: 3px;
            right: 15px;
          }
        `}</style>
      </main>
    </React.Fragment>
  );
};

export default Poll;
