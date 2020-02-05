import React, { useRef } from 'react'
import { GatsbyJumbotron } from '../components/MyStyledComponents'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Divider } from 'semantic-ui-react'
import Layout from '../components/layout'
import Img from 'gatsby-image'

import ResponsiveTabs from '../components/ResponsiveTabs'

export default function Staff() {
  const topOfTabRef = useRef(null)

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(staff)/" } }) {
        nodes {
          id
          html
          frontmatter {
            title
            order
          }
        }
      }
      waterDrops: file(
        relativePath: { regex: "/(images/resources/image_11_Water_drops_1)/" }
      ) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let panes = data.allMarkdownRemark.nodes
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
    .map(p => {
      return {
        menuItem: p.frontmatter.title,
        render: () => (
          <Container text dangerouslySetInnerHTML={{ __html: p.html }} />
        ),
      }
    })

  return (
    <Layout>
      <GatsbyJumbotron>
        <Img alt="water drops" fluid={data.waterDrops.childImageSharp.fluid} />
      </GatsbyJumbotron>

      <Divider hidden />
      <div ref={topOfTabRef} />
      <Container>
        <ResponsiveTabs panes={panes} />
      </Container>
    </Layout>
  )
}
