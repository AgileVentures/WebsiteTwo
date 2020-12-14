import React from "react"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { rhythm } from "../utils/typography"
import Header from "./header"

const client = new ApolloClient({
  uri: process.env.REACT_APP_AGILEVENTURES_API,
  cache: new InMemoryCache(),
})

const Layout = ({ children }) => (
  <ApolloProvider client={client}>
    <div>
      <Header />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
        <footer>
          <br />© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  </ApolloProvider>
)

export default Layout
