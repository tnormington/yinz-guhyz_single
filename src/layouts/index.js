import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import favicon from '../assets/png/favicon.png'
import ogImage from '../assets/png/ogImage.png'

const description =
  'Yinz Guhyz has day or two late news, journalism that is extremely positive, videos that will make you (insert emotion here), intelligent sports opinions (gasp!)...'

import './index.css'
import './base.sass'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: data.site.siteMetadata.description,
        },
        {
          name: 'og:image',
          content: ogImage,
        },
        {
          name: 'og:description',
          content: data.site.siteMetadata.description,
        },
        {
          name: 'og:title',
          content: data.site.siteMetadata.title,
        },
        {
          name: 'og:url',
          content: data.site.siteMetadata.url,
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:title',
          content: data.site.siteMetadata.title,
        },
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
