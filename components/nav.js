import React from 'react'
import Link from 'next/link'


const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/recipes">
          <a>Recipes</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        width: 100%;
        background-color: #3C5580;
      }
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
        
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 22px;
        margin-right: 10vw;
        text-align: center;
      }
    `}</style>
  </nav>
)

export default Nav
