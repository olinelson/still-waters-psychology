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
    .sort((a, b) => (a.frontmatter.order = b.frontmatter.order))
    .map(p => {
      return {
        menuItem: p.frontmatter.title,
        render: () => (
          <Container text dangerouslySetInnerHTML={{ __html: p.html }} />
        ),
      }
    })

  // const memberships = () => {
  //   return (
  //     <Container text>
  //       <h1>Professional Memberships & Registrations</h1>
  //       <p>
  //         Supporting the professional life of peers and students have been
  //         important to me. Across the years I have resided on numerous
  //         professional and external academic committees and internal academic
  //         committees within the institutions with whom I have worked. Currently
  //         I am a member of the Psychotherapy and Counselling Federation of
  //         Australian (PACFA) Education Accreditation Committee (EPAC), sitting
  //         on various of their course accreditation panels.
  //       </p>
  //       <p>
  //         Current professional association memberships and provider rights
  //         include:
  //       </p>
  //       <ol>
  //         <li>
  //           I am registered psychologist with Australian Health Professionals
  //           Regulation Agency - Psychology Board of Australia{' '}
  //         </li>
  //         <li>I am a registered Medicare provider</li>
  //         <li>
  //           I am a full member of the Australian Psychological Society (APS)
  //         </li>
  //         <li>
  //           I am a full member of the American Psychological Association (APA).
  //         </li>
  //         <li>
  //           I am an associate member of the Christian Counselling Association
  //           (CCAA).{' '}
  //         </li>
  //       </ol>
  //       <Divider hidden />
  //       <Card.Group centered>
  //         <Card
  //           image={medicare}
  //           style={{
  //             justifyContent: 'center',
  //             padding: '.5rem',
  //           }}
  //           href="https://www.humanservices.gov.au/organisations/health-professionals?utm_id=9"
  //         />
  //         <Card
  //           image={ahpra}
  //           style={{
  //             justifyContent: 'center',
  //             padding: '.5rem',
  //           }}
  //           href="https://www.ahpra.gov.au/"
  //         />
  //         <Card
  //           image={aps}
  //           style={{
  //             justifyContent: 'center',
  //             padding: '.5rem',
  //           }}
  //           href="https://www.psychology.org.au/"
  //         />
  //         <Card
  //           image={apa}
  //           style={{
  //             justifyContent: 'center',
  //             padding: '.5rem',
  //             background: 'white',
  //           }}
  //           href="https://www.apa.org/index"
  //         />
  //       </Card.Group>
  //     </Container>
  //   )
  // }

  // panes.push({ menuItem: 'Memberships', render: () => memberships() })

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
