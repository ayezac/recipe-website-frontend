import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Poll = (props) => {

    return (
        <React.Fragment>
            <Head>
                <link 
                    href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap" 
                    rel="stylesheet" />
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                    crossOrigin="anonymous"
                />
            </Head>
            <main id="container">
                <h1>Poll</h1>
                <form>
                    <ul className="list-group">
                        {props.polls.map(poll =>
                            <li className="questions list-group-item" key={poll.id}>
                                <Link
                                    href={`/choices/[id]`}
                                    as={`/choices/${poll.id}`}>
                                    <a className="display-5">{poll.question_text}</a>
                                </Link>
                            </li>
                        )}
                    </ul>
                </form>

                <style jsx>{`
   #container{
        width:90%;
        margin: auto;
    }
    h1 {
        background-color: #3C5580;
        color: white;
        font-size: 1.8rem;
        text-align: center;
        padding: 20px;
        font-family: 'Alata', sans-serif;
    }
    .questions{
        list-style: none;
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 30px;
        border-bottom: 2px solid #3C5580;
        padding-bottom: 40px;
        font-family: 'Open Sans', sans-serif;

    }
   li a{
       text-decoration: none;
       color:#3C5580;
       font-size: 1.1rem;
   }
    input[type="radio"] {
        width: 1.5rem;
        height: 1.5rem;
        position: relative;
        top:3px;
        right: 15px;
      }

    `}</style>
            </main>
        </React.Fragment>
    )

}

export default Poll;