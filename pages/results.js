import React from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import Head from 'next/head';
import {baseUrl} from '../components/Services';

const Results = (props) => {
    return(
        <Layout>
            <Head>
                <title>Poll Results</title>
                <link href="https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap" rel="stylesheet"/>
            </Head>
            <div className="container">
            <h1>Results</h1>
                <ul>
                {props.polls.map(poll => 
                <li className="results"  key={poll.id}>
                    <p id="questions">{poll.question_text}</p>
                    <table className="table table-bordered">
                        <thead className="thead-light">
                            <tr>
                                <th>Choice</th>
                                <th>Votes</th>
                            </tr>
                        </thead>{poll.choices.map(choice =>
                        <tbody key={choice.id}>
                                <tr><td>{choice.choice_text}</td> 
                                <td>{choice.votes}</td></tr>
                        </tbody> )}
                    </table> 
                  </li>
            )}
                </ul>
            </div>
            <style jsx>{`
   
            .container{
                text-align: center;
            }
            span{
                padding: 10px;
            }
            .results{
                list-style: none;
                padding: 20px;
                margin: auto;
                border-bottom: 1px solid;
            }
            #questions{
                color: #3C5580;
                font-size: 1.5rem;
                font-family: 'Alata', sans-serif;
            }
            .table{
                width: 500px;
                margin: auto;
            }
            `}</style>
        </Layout>
    )
};

export default Results;

Results.getInitialProps = async function(props) {
    const result = await axios.get(`${baseUrl}polls/questions/`);
    const data = await result.data;
    console.log(`Show data fetched. ${data}`)
    return {
        polls:data.slice(0,4)
    }
  }