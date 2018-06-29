module.exports = {
  siteMetadata: {
    title: 'Yinz Guhyz',
    description:
      'Yinz Guhyz has day or two late news, journalism that is extremely positive, videos that will make you (insert emotion here), intelligent sports opinions (gasp!)...',
    url: 'https://yinzguhyz.com',
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
