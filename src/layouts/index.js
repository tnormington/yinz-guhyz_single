import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import favicon from '../assets/png/favicon.png'

import './index.css'
import './base.sass'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Knewave|Quicksand',
          rel: 'stylesheet',
        },
        {
          rel: 'icon',
          href: favicon,
          type: 'image/x-icon',
        },
        {
          rel: 'icon',
          href: '/public/favicon.ico',
          type: 'image/x-icon',
        },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
