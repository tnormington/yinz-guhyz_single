import React from 'react'
import Link from 'gatsby-link'

import NewsletterForm from '../components/NewsletterForm'
import Hero from '../components/Hero'

const IndexPage = () => (
  <div>
    <Hero />
    <div className="main-content">
      <div className="main-content__body">
        <div id="anchor-link" />
        <p>
          We are a group of interesting people that originally hail from
          Pittsburgh, with absolutely no professional experience in the fields
          we will be discussing or working with. You know, kind of like most
          people who are employed at jobs in this country.
        </p>
        <p>
          This is a collection of writings, collaborations, and projects
          spanning multiple different forms of media. As a general rule of
          thumb, a thing will only appear on this site, in any form, if it has
          well-founded and legitimate merit. Check it awt.
        </p>
        <h2>Interested?</h2>
        <NewsletterForm />
      </div>
    </div>
    <div className="footer-bar">
      <p>Yinz Guhyz &copy; 2018</p>
    </div>
  </div>
)

export default IndexPage
