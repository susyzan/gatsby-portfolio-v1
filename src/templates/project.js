// import React from "react"
// import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"
//
// import Layout from "../components/layout"
//
// export default ({ data }) => {
//     const article = data.markdownRemark
//     return (
//         <Layout>
//
//         </Layout>
//     )
// }
//
// export const query = graphql`
//     query($slug: String!) {
//         markdownRemark(fields: { slug: { eq: $slug } }) {
//             html
//             frontmatter {
//                 title
//                 date
//                 subject
//                 author
//                 featimg {
//                     childImageSharp {
//                         fluid(maxWidth: 1360) {
//                             ...GatsbyImageSharpFluid
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `
