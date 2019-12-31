import React from 'react';
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
            <h2>This is the about page</h2>
            <p>Go to contact page <Link to="/contact">Here</Link></p>
        </div>
    )
}

export default AboutPage