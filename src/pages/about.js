import React from 'react'

import {
  Quote,
  GatsbyJumbotron,
  GatsbyJumbotronInnerContainer,
} from '../components/MyStyledComponents'

import { Container, Divider, Segment } from 'semantic-ui-react'
import Layout from '../components/layout'

import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

export default function About() {
  const images = useStaticQuery(graphql`
    query {
      wharf: file(relativePath: { regex: "/(images/resources/wharf)/" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blueSunset: file(
        relativePath: { regex: "/(images/resources/image_4_Blue_Sunset)/" }
      ) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      motherChild: file(
        relativePath: { regex: "/(images/resources/image_3_Mother_Child)/" }
      ) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      boat: file(relativePath: { regex: "/(images/resources/boat)/" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return (
    <Layout>
      <GatsbyJumbotron>
        <Img
          alt="wharf"
          style={{ gridArea: 'main' }}
          fluid={images.wharf.childImageSharp.fluid}
        />
      </GatsbyJumbotron>
      {/* <Jumbotron src={wharf}></Jumbotron> */}
      <Container>
        <Segment basic size="large">
          <h1>Still Waters</h1>
          <p>
            The image of ‘still waters’ provides a powerful metaphor of the
            quiet we often long for when faced with demanding lives, a turbulent
            world, personal crisis, and/or a sense that personal growth is
            required.
          </p>

          <p>
            Whether alone or in the company of another (e.g., parent, partner,
            friend, therapist, the divine) settling down alongside a body of
            water can elicit an interior sense of stillness and peacefulness,
            our physical bodies also relaxing.
          </p>
        </Segment>

        <Img
          alt="mother holding child on beach"
          style={{ maxWidth: '42rem', margin: 'auto' }}
          fluid={images.motherChild.childImageSharp.fluid}
        />

        <Segment
          basic
          size="big"
          content={
            <p>
              In psychological terms, ‘still waters’ is a metaphor for
              ‘self-regulation’: having a stable and coherent sense of self;
              being able to reflectively move through life in ways that result
              in rich, purposeful living; flexible and adaptive in the face of
              the unexpected.
            </p>
          }
        />

        <Quote backgroundColor="white" textColor="rgb(68, 164, 206)">
          <blockquote>
            {/* <Icon size='large' name='quote left' /> */}
            <p style={{ textAlign: 'center', fontSize: '2rem' }}>
              still waters is a metaphor for self-regulation
            </p>
          </blockquote>
        </Quote>

        <Segment
          basic
          size="big"
          content={
            <p>
              When faced with difficult situations and accompanying challenging
              thoughts and feelings, it is easy to become overwhelmed and
              distressed, unable to acts in ways aligned to one’s personal and
              professional values and beliefs. At these times it can feel like
              we are caught on a choppy ocean, at the mercy of the waves that
              buffet us. Therapy provided in a caring, secure and supportive
              context allows the individual to safely explore and address issues
              currently affecting his/her life.
            </p>
          }
        />

        {/* <Segment basic>
          <Image alt="boat on still waters" centered size="big" src={boat} />
        </Segment> */}

        <Img
          alt="boat on the water"
          style={{ maxWidth: '42rem', margin: 'auto' }}
          fluid={images.boat.childImageSharp.fluid}
        />

        <Segment
          basic
          size="big"
          content={
            <p>
              In the opening verses of Psalm 23 (1-3), Christian believers are
              told that restoration of the soul comes in the context of ‘green
              pastures’ and ‘still waters’ – the Divine drawing the weary and
              the wounded to a quiet place where restoration is possible.
              Therapy that takes into consideration one’s worldview helps
              individuals address life issues in ways that align with their life
              values.
            </p>
          }
        />

        <Divider hidden />
      </Container>

      <GatsbyJumbotron fullHeight>
        <GatsbyJumbotronInnerContainer>
          <blockquote style={{ color: 'white' }}>
            <p
              style={{
                textAlign: 'center',
                fontSize: '2rem',
              }}
            >
              The Lord is my shepherd; I shall not want. He makes me lie down in
              green pastures. He leads me beside still waters. He restores my
              soul.
            </p>

            <figcaption style={{ fontSize: '1rem', textAlign: 'right' }}>
              &mdash; Psalm 23: 1: 3 ,Holy Bible, ESV®, 2001
            </figcaption>
          </blockquote>
        </GatsbyJumbotronInnerContainer>
        <Img
          alt="blue sunset"
          style={{ gridArea: 'main' }}
          fluid={images.blueSunset.childImageSharp.fluid}
        />
      </GatsbyJumbotron>
    </Layout>
  )
}
