import React from "react"

import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"

const Work = () => (
  <Layout>
    <SEO title="Susanna Zanatta - Home" />
        <Section id="banner" bg="bg_tertiary">
            <h1>Work</h1>
        </Section>
  </Layout>
)

export default Work
