import React from "react"
import { graphql } from 'gatsby'

import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"

import Layout from "../components/layout"
import Section from "../components/section"
import HomeBanner from "../components/homebanner"
import SEO from "../components/seo"
import FloatingShapes from "../components/floatingshapes";

const IndexPage = ({data}) => (
      <Layout>
        <SEO title="Susanna Zanatta - Home" />
        <Section bg="home_bg_image">
            <HomeBanner data={data}/>
            <FloatingShapes/>
        </Section>
      </Layout>
)

export default IndexPage

export const query = graphql`
    {
        bannerImage: file(
            relativePath: { eq: "susie.png" }
        ) {
            childImageSharp {
                fluid(maxWidth: 1184) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
