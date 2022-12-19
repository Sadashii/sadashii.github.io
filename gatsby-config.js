/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Tanishq Sangwan`,
    description: 'Fullstack developer who specializes in building on the web with MERN and Next.js handy.',
    siteUrl: `http://localhost:8000`,
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `Tanishq Sangwan - Fullstack Developer & Software Engineer`,
      short_name: `Tanishq Sangwan - Fullstack Developer & Software Engineer`,
      start_url: `/`,
      background_color: `#1a191d`,
      theme_color: `#66d9ed`,
      display: `standalone`,
      "icons": [
        {
          "src":"/android-chrome-192x192.png",
          "sizes":"192x192",
          "type":"image/png"
        },
        {
          "src":"/android-chrome-512x512.png",
          "sizes":"512x512",
          "type":"image/png"
        }
      ],
    }
  }, 'gatsby-plugin-offline']
};