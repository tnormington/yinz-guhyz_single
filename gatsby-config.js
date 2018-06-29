module.exports = {
  siteMetadata: {
    title: 'Yinz Guhyz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://yinzguhyz.us18.list-manage.com/subscribe/post?u=4c06418751f7143b41d7470e6&id=b130c0d78b',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-121463458-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
