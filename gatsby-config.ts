import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Katherine Ebel Portfolio`,
        siteUrl: `https://www.katherineebel.com`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: ['gatsby-plugin-styled-components', 'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-your-fonts',
            options: {
                host: 'katherineebel.github.io/fonts',
                fonts: [
                    'sf-mono.css',
                    'calibre.css'
                ],
            },
        },]
};

export default config;
