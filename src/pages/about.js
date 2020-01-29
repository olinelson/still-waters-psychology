import React from 'react'

import ContactForm from '../components/ContactForm'
import {
  JumboHeader,
  JumboMessage,
  Jumbotron,
  CreditContainer,
  ImageDiv,
  CenteredGridColumn,
  Quote,
} from '../components/MyStyledComponents'

import {
  Embed,
  Container,
  Button,
  Divider,
  Header,
  Accordion,
  Segment,
  Responsive,
  Image,
} from 'semantic-ui-react'
import Layout from '../components/layout'
import FAQS from '../components/Faqs'
// images
import wharf from '../images/resources/wharf.jpg'
import boat from '../images/resources/boat.png'
import blueSunset from '../images/resources/image_4_Blue_Sunset.jpg'

import motherChild from '../images/resources/image_3_Mother_Child.jpg'

export default function About() {
  return (
    <Layout>
      <Jumbotron src={wharf}></Jumbotron>
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

        <Segment basic>
          <Image
            alt="mother standing with child on beach"
            centered
            size="big"
            src={motherChild}
          />
        </Segment>

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

        <Segment basic>
          <Image alt="boat on still waters" centered size="big" src={boat} />
        </Segment>

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

      <Jumbotron fullHeight src={blueSunset}>
        <JumboMessage style={{}}>
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
        </JumboMessage>
      </Jumbotron>
    </Layout>
  )
}
