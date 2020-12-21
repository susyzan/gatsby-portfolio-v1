import React from "react"
import RouteAnnouncerHack from "../components/routeAnnouncerHack";

import "./about.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"
import "../styles/reset.css"

import Banner from "../components/banner";
import BannerHeading from "../components/bannerheading";
import Button from "../components/button"
import FloatingShapes from "../components/floatingshapes";
import Layout from "../components/layout"
import Section from "../components/section";
import SEO from "../components/seo"
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";

const pageTitle = "404 - Susanna Zanatta"

const NotFoundPage = () => (
    <Layout pageTitle={pageTitle}>
        {/*remove this line if not using page transition to navigate to this page*/}
        <RouteAnnouncerHack title={pageTitle}/>
        <SEO title={pageTitle}/>
        <Section id="banner" bg="bg_transparent">
            <Banner>
                <Fade duration={2000} left={true} distance="1.6rem">
                    <BannerHeading large={false}>Oops, wrong way...</BannerHeading>
                    <p>Looks like you took a wrong turn, please go back to the home page and keep browsing!</p>
                    <Bounce delay={500} duration={800} bottom={true}>
                        <Button
                            to="/"
                            floating={true}
                        >Go back to home</Button>
                    </Bounce>
                </Fade>
                <div>
                    <div style={{position: 'relative'}}>
                        <FloatingShapes />
                    </div>
                </div>
            </Banner>
        </Section>
    </Layout>
)

export default NotFoundPage
