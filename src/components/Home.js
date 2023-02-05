import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
      <div>
          <nav>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                    </li>
                </ul>
              <ul>
                  <li>
                      <Link to="/about">About</Link>
                    </li>
                </ul>
          </nav>
          <h2>You are home</h2>
    </div>
  )
}

export default Home;
