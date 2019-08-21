# Gatsby

[Gatsby](https://www.gatsbyjs.org/)

[Commands (Gatsby CLI)](https://www.gatsbyjs.org/docs/gatsby-cli/)

[Gatsby Starter Blog](https://github.com/gatsbyjs/gatsby-starter-blog)

[Gatsby Plugin Library](https://www.gatsbyjs.org/plugins/)

[Querying data in components with the useStaticQuery hook](https://www.gatsbyjs.org/docs/use-static-query/)

[Creating and Modifying Pages](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/)

[gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)

[gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)

[Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/)

[Create Pages](https://www.gatsbyjs.org/docs/node-apis/#createPages)

[Create Page](https://www.gatsbyjs.org/docs/node-apis/#createPage)

[Tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates)

[dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

[NodeJs Path](https://nodejs.org/api/path.html)

[styled-components](https://www.npmjs.com/package/styled-components)

[gatsby-plugin-styled-components](https://www.npmjs.com/package/gatsby-plugin-styled-components)

[babel-plugin-styled-components](https://www.npmjs.com/package/babel-plugin-styled-components)

[Netlify](https://www.netlify.com/)




## Start a Gatsby Project

```
cd repo-gatsby/t1
npx gatsby new gatsby-blog
```

To run

```
cd gatsby-blog
npm run develop
```

Browser

```
http://localhost:8000/
```

View GraphiQL, an in-browser IDE, to explore your site's data and schema

```⠀
http://localhost:8000/___graphql
```

## Markdown

```
npm i gatsby-transformer-remark --save
```

add plugin to `gatsby-config.js`

```
`gatsby-transformer-remark`,
```

## GraphQL

```
http://localhost:8000/___graphql
```

Select

```
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          date
          description
          title
        }
        excerpt
      }
    }
  }
}
```

Edit `index.js`

```
import { Link, graphql } from "gatsby";
```

## Gatsby Styled Components

```
npm add gatsby-plugin-styled-components styled-components babel-plugin-styled-components --save
```

## Netlify

```
git remote add origin git@github.com:johnvincentio/new-gatsby-blog.git
git push origin master
```

Create github repo `new-gatsby-blog`

```
git@github.com:johnvincentio/new-gatsby-blog.git
```

* New Site from Git
	* Github

Only Selected repositories

* new-gatsby-blog
* install











# END