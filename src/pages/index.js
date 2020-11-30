import React from "react"
import { graphql } from 'gatsby'
import RouteAnnouncerHack from "../components/routeAnnouncerHack"

import "../styles/accessibility.css"
import "../styles/global.module.css"
import "../styles/reset.css"

import HomeBanner from "../components/homebanner"
import FloatingShapes from "../components/floatingshapes";
import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
    const pageTitle = "Susanna Zanatta - Home";
    return (
        <Layout pageTitle={pageTitle}>
            {/*remove this line if not using page transition to navigate to this page*/}
            <RouteAnnouncerHack title={pageTitle}/>
            <SEO title={pageTitle} />
            <Section bg="bg_transparent">
                <HomeBanner data={data}/>
                <FloatingShapes/>
            </Section>
        </Layout>
    )
}


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
