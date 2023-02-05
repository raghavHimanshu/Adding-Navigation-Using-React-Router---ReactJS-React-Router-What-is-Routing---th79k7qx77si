import React from 'react'
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
          <h2>You are on the about page</h2>
          <hr />
          <button>
              <Link to="/">Back</Link>
          </button>
      </div>
  )
}

export default About;
