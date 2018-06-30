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
          Multiple different forms of media were used in creating your regularly scheduled content.
  We're sticklers for quality ova here, and that's why nothing will appear under our flag unless it has
  well-founded and legitimate merit.  Our goal is to spread the good word, inspire others to express themselves, 
  and to be a voice of legitimacy in a time where those are hard  to come by. We enjoy a good time. You to doo. 
  We're in this together, friend. Check it awt.
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
