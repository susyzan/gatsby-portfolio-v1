import React from "react"

import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"

import Layout from "../components/layout"
import Section from "../components/section"
import HomeBanner from "../components/homebanner"
import SEO from "../components/seo"

const IndexPage = () => (
      <Layout>
        <SEO title="Susanna Zanatta - Home" />
            <Section
                id="banner"
                bg="bg_image"
            >
                <HomeBanner />
            </Section>
      </Layout>
)

export default IndexPage
