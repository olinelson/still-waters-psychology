import React, { useState, useRef } from 'react'
import { Jumbotron } from '../components/StyledComponents'
import { Container, Image, Divider, Tab, Responsive } from 'semantic-ui-react'
import { useStaticQuery, graphql } from 'gatsby'

// images
import hands from '../images/resources/Image_19_Hands.jpg'
import plant from '../images/resources/plant.jpg'
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

  const panes = data.allMarkdownRemark.nodes.map(p => {
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

      <ResponsiveTabs panes={panes} />
    </Layout>
  )
}
