import React from 'react'
import { Link } from 'react-router-dom'

const Public = () => {
  return (
    <section className="public">
        <header>
            <h1>Welcome to <span className="nowrap">Dan D. Repairs!</span></h1>
        </header>
        <main className="public__main">
            <p>Located at the center of CBD in Naiorbi, Dan D. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
            <address className="public__addr">
                Dan D. Repairs<br />
                Kimathi Street<br />
                Kimathi House<br />
                <a href="tel:+254712345678">(+254) 712-345-678</a>
            </address>
            <br />
            <p>Owner: Dan Omari</p>
        </main>
        <footer>
            <Link to="/login">Employee Login</Link>
        </footer>
    </section>
  )
}

export default Public