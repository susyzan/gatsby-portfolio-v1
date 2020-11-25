import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SkipLinks from "./skiplinks"
import Footer from "./footer"
import "./layout.css"
import PageTransition from "gatsby-v2-plugin-page-transitions";

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
            <div className="main-wrapper">
                <main id="main">
                    <PageTransition>
                        {children}
                    </PageTransition>
                </main>
                <Footer menuLinks={data.site.siteMetadata.menuLinks}/>
            </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
