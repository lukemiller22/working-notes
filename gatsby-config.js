module.exports = {
    siteMetadata: {
      title: "Luke's Working Notes",
    },
    plugins: [
      {
        resolve: `gatsby-theme-andy`,
        options: {
          rootPath: `/working-notes/`,
        },
      },
    ],
  };
