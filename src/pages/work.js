import React from "react"
import { Link } from "gatsby"
import PageTransition from 'gatsby-v2-plugin-page-transitions'

import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"

const Work = () => (
  <Layout>
    <SEO title="Susanna Zanatta - Home" />
      <PageTransition>
        <Section id="banner" bg="bg_tertiary">
            <h1>Work</h1>
        </Section>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </PageTransition>
  </Layout>
)

export default Work
