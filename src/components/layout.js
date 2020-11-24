import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SkipLinks from "./skiplinks"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
            title
            headerTitleSm
            headerTitle
            headerDescription
            menuLinks {
                name
                link
            }
        }
      }
    }
  `)

  return (
    <>
      <SkipLinks/>
        <Header
            siteTitle={data.site.siteMetadata.title}
            headerTitleSm={data.site.siteMetadata.headerTitleSm}
            headerTitle={data.site.siteMetadata.headerTitle}
            headerDescription={data.site.siteMetadata.headerDescription}
            menuLinks={data.site.siteMetadata.menuLinks}
        />
        <div
          style={{
            margin: `0`,
            padding: `0 0 1.45rem`
          }}
        >
        <main id="main">
            {children}
        </main>
        <footer id="footer" style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
