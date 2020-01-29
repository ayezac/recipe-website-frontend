import React from "react";
import Nav from "./nav";
import Head from "next/head";
import Link from "next/link";

const layoutStyle = {
  boxSizing: "border-box",
  width: "100%",
  minHeight: "100%"
};

const Layout = props => {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
      </Head>
      <Nav />
      <main className="mt-4">
        <div style={layoutStyle}>{props.children}</div>
        <footer className="p-3">
          <p>&copy; 2019</p>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </footer>
        <style jsx>{`
          main {
            height: 100vh;
            margin: 0;
          }

          footer {
            clear: both;
            margin-top: -15px;
            margin-bottom: 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            height: 60px;
            width: 100vw;
            border-top: 1px solid black;
            padding: 10px;
          }
          footer a {
            color: black;
          }
          --font-color: #70706e;
        `}</style>
      </main>
    </React.Fragment>
  );
};

export default Layout;
