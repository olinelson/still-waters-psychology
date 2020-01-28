import React from 'react'

import ContactForm from '../components/ContactForm'

import { Jumbotron } from '../components/StyledComponents'
import pathImg from '../images/resources/image_16_Path.jpg'
import {
  Embed,
  Container,
  Button,
  Divider,
  Header,
  Accordion,
} from 'semantic-ui-react'
import Layout from '../components/layout'

import { useStaticQuery, graphql } from 'gatsby'

export default function Contact() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(contact)/" } }
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
      <Jumbotron imgDir="images/image_16/" src={pathImg} />
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
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.119962861653!2d150.74602931573722!3d-34.0407937354384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f1c12e78fbe5%3A0x9f87da28f965f7d4!2sShop%204%2F38%20Exchange%20Parade%2C%20Smeaton%20Grange%20NSW%202567!5e0!3m2!1sen!2sau!4v1576062669966!5m2!1sen!2sau"
        />

        <Divider hidden />

        <Container textAlign="center">
          <Button
            target="_blank"
            href="https://www.google.com/maps?ll=-34.040798,150.748218&z=16&t=m&hl=en&gl=AU&mapclient=embed&daddr=Shop+4/38+Exchange+Parade+Smeaton+Grange+NSW+2567@-34.0407982,150.748218"
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
