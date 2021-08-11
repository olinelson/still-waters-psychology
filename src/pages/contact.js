import React from 'react'

import ContactForm from '../components/ContactForm'

import { GatsbyJumbotron } from '../components/MyStyledComponents'

import {
  Embed,
  Container,
  Button,
  Divider,
  Header,
  Accordion,
} from 'semantic-ui-react'
import Layout from '../components/layout'

import Img from 'gatsby-image'

import { useStaticQuery, graphql } from 'gatsby'

export default function Contact() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(contactPanels)/" } }
      ) {
        nodes {
          id
          html
          frontmatter {
            title
          }
        }
      }
      startingTheJourney: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(startingTheJourney)/" } }
      ) {
        nodes {
          id
          html
          frontmatter {
            title
          }
        }
      }
      location: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(location)/" } }
      ) {
        nodes {
          id
          html
          frontmatter {
            title
          }
        }
      }
      trees: file(relativePath: { regex: "/(images/resources/contact)/" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const startingTheJourney = (
    <div
      dangerouslySetInnerHTML={{
        __html: data.startingTheJourney.nodes[0].html,
      }}
    />
  )
  const location = (
    <div
      dangerouslySetInnerHTML={{
        __html: data.location.nodes[0].html,
      }}
    />
  )

  const panels = data.allMarkdownRemark.nodes.map(p => {
    return {
      key: p.frontmatter.title,
      title: p.frontmatter.title,
      content: {
        content: <Container dangerouslySetInnerHTML={{ __html: p.html }} />,
      },
    }
  })

  return (
    <Layout>
      {/* <Jumbotron imgDir="images/image_16/" src={pathImg} /> */}
      <GatsbyJumbotron>
        <Img alt="path of trees" fluid={data.trees.childImageSharp.fluid} />
      </GatsbyJumbotron>
      <Divider hidden />
      <Container text>
        {startingTheJourney}

        <Divider hidden />

        <ContactForm />

        <Divider />

        {location}

        <Divider hidden />
        <Embed
          active
          icon="map"
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13222.692950115681!2d150.68601809912636!3d-34.0522521912128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f0dcd0ff6409%3A0x37e0130f6fce03e9!2s20-24%20John%20St%2C%20Camden%20NSW%202570!5e0!3m2!1sen!2sau!4v1628666883461!5m2!1sen!2sau"
        />

        <Divider hidden />

        <Container textAlign="center">
          <Button
            target="_blank"
            href="https://www.google.com/maps/dir//20-24%20John%20St,%20Camden%20NSW%202570"
          >
            Get Directions
          </Button>
        </Container>
        <Divider hidden />

        <Divider />

        <Header as="h1" content="Additional Information" />
        <Accordion defaultActiveIndex={0} fluid styled panels={panels} />
      </Container>
    </Layout>
  )
}
