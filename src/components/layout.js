import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

import Header from "./header"
import Footer from "./footer"
import SkipLinks from "./skiplinks"

import PageTransition from "gatsby-v2-plugin-page-transitions";

const Layout = ({ children, pageTitle }) => {
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
                pageTitle={pageTitle}
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
                <Footer />
            </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
    pageTitle: PropTypes.string
}

export default Layout
