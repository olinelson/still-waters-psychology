import React from 'react'
import { Jumbotron } from '../components/MyStyledComponents'
import { Container, Divider } from 'semantic-ui-react'
import { useStaticQuery, graphql } from 'gatsby'

import sunsetWithRocks from '../images/resources/image_6_Sunset_with_rocks.jpg'
import Layout from '../components/layout'
import ResponsiveTabs from '../components/ResponsiveTabs'

export default function Services() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(services)/" } }
      ) {
        nodes {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }
  `)

  const panes = data.allMarkdownRemark.nodes
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
      <Jumbotron src={sunsetWithRocks}></Jumbotron>
      <Divider hidden />
      <Container>
        <ResponsiveTabs panes={panes} />
      </Container>
    </Layout>
  )
}
