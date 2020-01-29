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
      <main className="p-4 container">
        <form>
          <ul className="list-group">
            {props.polls.map(poll => (
              <li className="questions p-3" key={poll.id}>
                <Link href={`/choices/[id]`} as={`/choices/${poll.id}`}>
                  <a className="display-5">{poll.question_text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </form>

        <style jsx>{`
          .container {
            width: 90%;
            margin: auto;
            padding-top: 20px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
          }

          .questions {
            list-style: none;
            text-align: center;
            font-size: 1rem;
            margin-bottom: 10px;
            padding-bottom: 10px;
            font-family: "Open Sans", sans-serif;
            border-bottom: 1px solid  #fc0384;;
          }
          li a {
            text-decoration: none;
            color:var(--font-color);
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
