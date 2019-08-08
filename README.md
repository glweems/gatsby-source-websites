<h1 align="center">Welcome to gatsby-source-websites 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/glweems/gatsby-plugin-template-typescript#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/glweems/gatsby-plugin-template-typescript/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/glweems/gatsby-plugin-template-typescript/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> a starter repo for creating gatsby plugins in typescript

### 🏠 [Homepage](https://github.com/glweems/gatsby-plugin-template-typescript.git)

## Install

```sh
npm install gatsby-source-websites
```

or

```sh
yarn add gatsby-source-websites
```

## Setup

```javascript
{
  plugins: [
    {
      resolve: `gatsby-source-websites`
      options: {
        websites: [
          {
            name: `My Super Fresh Website`,
            slug: `my-super-fresh-website`,
            url: `https://superfreshsite.com`,

            // Optional
            description: `This is a super fresh site I build because I'm super fresh`,
            repo: `https://github.com/glweems/superfreshsite`
          },
          {
            // Add another website with same info
          }
        ]
      }
    }
  ]
}
```

## Usage

Query info through graphql

```graphql
query MyWebsites {
    allWebsites {
        nodes {
            name
            url
            description
            repo
        }
    }
}
```

## Author

👤 **Garrett Weems <gwgraphicdesign@gmail.com>**

-   Github: [@glweems](https://github.com/glweems)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/glweems/gatsby-plugin-template-typescript/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Garrett Weems <gwgraphicdesign@gmail.com>](https://github.com/glweems).<br />
This project is [MIT](https://github.com/glweems/gatsby-plugin-template-typescript/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
