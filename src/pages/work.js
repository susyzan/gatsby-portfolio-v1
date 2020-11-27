import React from "react"

import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"

import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import RouteAnnouncerHack from "../components/routeAnnouncerHack";

const Work = ({data}) => {
    const pageTitle = "Work - Susanna Zanatta";
    return (
        <Layout pageTitle={pageTitle}>
            {/*remove this line if not using page transition to navigate to this page*/}
            <RouteAnnouncerHack title={pageTitle}/>
            <SEO title={pageTitle}/>
            <Section id="banner" bg="bg_tertiary">
                <h1>Work</h1>
            </Section>
        </Layout>
    )
}

export default Work
