import React from 'react'

// components
import {
  GatsbyJumbotron,
  GatsbyJumbotronInnerContainer,
  CenteredGridColumn,
  Quote,
  ImageParagraph,
} from '../components/MyStyledComponents'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import {
  Button,
  Container,
  Divider,
  Grid,
  Segment,
  List,
  Header,
} from 'semantic-ui-react'
import Layout from '../components/layout'

import FAQS from '../components/Faqs'

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      stillWaters: file(
        relativePath: {
          regex: "/(images/resources/image_1_Still_Waters_High_Resolution)/"
        }
      ) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sunset: file(
        relativePath: { regex: "/(images/resources/image_2_Sunset)/" }
      ) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { regex: "/(images/logos/white_logo)/" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      aStillMind: file(
        relativePath: { regex: "/(images/resources/still_mind)/" }
      ) {
        childImageSharp {
          fixed(width: 280, height: 280) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      peacefulHeart: file(
        relativePath: { regex: "/(images/resources/peaceful_heart)/" }
      ) {
        childImageSharp {
          fixed(width: 280, height: 280) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      calmSpirit: file(
        relativePath: { regex: "/(images/resources/calm_spirit)/" }
      ) {
        childImageSharp {
          fixed(width: 280, height: 280) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      restoredSoul: file(
        relativePath: { regex: "/(images/resources/restored_soul)/" }
      ) {
        childImageSharp {
          fixed(width: 280, height: 280) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      covidSafe: file(
        relativePath: { regex: "/(images/resources/covid-safe-logo)/" }
      ) {
        childImageSharp {
          fixed(width: 280, height: 280) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout location={location}>
        <GatsbyJumbotron>
          <GatsbyJumbotronInnerContainer>
            <Img
              alt="still waters logo"
              fixed={data.logo.childImageSharp.fixed}
            />
          </GatsbyJumbotronInnerContainer>

          <GatsbyJumbotronInnerContainer
            style={{
              display: 'grid',
              justifyContent: 'end',
              alignItems: 'end',
              padding: '1rem',
              color: 'white',
            }}
          >
            <small>
              ‘Still Waters’ –{' '}
              <a
                style={{ color: 'inherit' }}
                href="https://www.maine1photography.com"
              >
                Catharine McCann
              </a>
            </small>
          </GatsbyJumbotronInnerContainer>

          <Img
            alt="still waters painting"
            style={{ gridArea: 'main' }}
            fluid={data.stillWaters.childImageSharp.fluid}
          />
        </GatsbyJumbotron>

        <Divider hidden />

        <Container>
          <Container text>
            <Segment attached="bottom" raised compact size="medium">
              <ImageParagraph>
                <p>
                  We are a COVID Safe Business (registered with NSW Services)
                  offering Telehealth services to ensure access to and continued
                  client care during lockdowns. We also offer in-person sessions
                  when it is safe for clients to attend on site. Please contact
                  us on 0466 231 620 to discuss your needs, and/or to arrange an
                  appointment.
                </p>
                <Img
                  alt="Covid safe logo"
                  fixed={data.covidSafe.childImageSharp.fixed}
                  style={{
                    width: '5rem',
                    height: '5rem',
                  }}
                />
              </ImageParagraph>
            </Segment>
          </Container>
          <Segment
            size="big"
            basic
            content={
              <p>
                Still Waters Psychology is an adult psychotherapy and psychology
                service, providing evidence-based care for a range of mental
                health conditions and life challenges, for adults of all ages
                and life stages.
              </p>
            }
          />

          <Quote backgroundColor="#016F92" textColor="white">
            <blockquote style={{ color: 'inherit' }}>
              <p>
                "My vision is to support, equip and encourage individuals and
                communities to heal, grow and flourish"
              </p>

              <figcaption>&mdash; Dr Marie-Thérèse Proctor</figcaption>
            </blockquote>
          </Quote>

          <Segment
            size="big"
            basic
            content={
              <p>
                To achieve this vision, Still Waters Psychology has a
                strengths-based, recovery-oriented focus in its provision of
                care, guided by trauma-informed and relationally focused models
                of care.
              </p>
            }
          />

          <Quote backgroundColor="#016F92" textColor="white">
            <blockquote style={{ color: 'inherit' }}>
              <p>
                " When healing, growth and flourishing occurs, individuals have
                scope to realise their personal and professional potential,
                while communities become supportive, nurturing and caring
                spaces, able to respond in healthy and positive ways to the
                needs of its members. Positive change in the individual can
                filter through, helping to form healthier communities. In turn,
                healthy communities become the foundation of healthy nations."
              </p>

              <figcaption>&mdash; Dr Marie-Thérèse Proctor</figcaption>
            </blockquote>
          </Quote>

          <Segment
            basic
            size="big"
            content={
              <p>
                Still Waters Psychology can support people of varied worldviews
                and perspectives to live life in ways which align with their
                personal values, beliefs and life goals. As part of this process
                clients are encouraged to foster:
              </p>
            }
          />
        </Container>

        <Segment vertical basic>
          <Grid columns={2} padded relaxed stackable>
            <Grid.Row>
              <CenteredGridColumn>
                <Img
                  alt="park bench in park"
                  fixed={data.aStillMind.childImageSharp.fixed}
                />

                <h2>A still mind</h2>
                <Divider hidden />
              </CenteredGridColumn>

              <CenteredGridColumn>
                <Img
                  alt="woman on rocks by the sea"
                  fixed={data.peacefulHeart.childImageSharp.fixed}
                />

                <h2>A peaceful heart</h2>
                <Divider hidden />
              </CenteredGridColumn>

              <CenteredGridColumn>
                <Img
                  alt="lake at the base of two mountains"
                  fixed={data.calmSpirit.childImageSharp.fixed}
                />

                <h2>A calm spirit</h2>
                <Divider hidden />
              </CenteredGridColumn>

              <CenteredGridColumn>
                <Img
                  alt="man in a cave on top of a mountain"
                  fixed={data.restoredSoul.childImageSharp.fixed}
                />

                <h2>A restored soul</h2>
                <Divider hidden />
              </CenteredGridColumn>
            </Grid.Row>
          </Grid>
        </Segment>

        <Container>
          <Quote backgroundColor="#016F92" textColor="white">
            <blockquote style={{ color: 'inherit' }}>
              <p>
                "I am committed to creating a safe and supportive space in
                which, together, client and therapist, can address the client’s
                needs and concerns. I value relationships and collaboration,
                these central to the way I engage with my clients."
              </p>

              <figcaption>&mdash; Dr Marie-Thérèse Proctor</figcaption>
            </blockquote>
          </Quote>

          <Segment size="big" basic>
            <h1>Practice Specialisations</h1>
            <p>
              In addition to general adult mental health services, Still Waters
              Psychology offers psychological care in four key areas:{' '}
            </p>
            <ul>
              <li>Spirituality and Mental Health </li>
              <li>Carers’ Health and Wellbeing</li>
              <li>Bereavement, Grief, Loss and Times of Change</li>
              <li>Attachment and Complex Trauma</li>
            </ul>

            <p>
              The practice can also provide educational and professional
              development workshops and presentations for:
            </p>

            <ul>
              <li>
                Christian church communities - focused on building healthy
                leadership and health communities.
              </li>
              <li>
                Allied health care professionals – focused on areas such as
                attachment, spirituality and health, grief and loss, Acceptance
                and Commitment Therapy, etc.
              </li>
              <li>Community groups - focused on general mental health.</li>
            </ul>

            <p>
              For more information about these areas, please see the{' '}
              <Link to="/services">Services Page</Link> for more details.
            </p>
            <p>
              Clinical supervision is also available for allied health
              professionals, chaplains, minsters and church leaders.
            </p>
          </Segment>
        </Container>

        <Divider hidden />

        <GatsbyJumbotron fullHeight>
          <GatsbyJumbotronInnerContainer>
            <Segment basic>
              <Grid columns={2} stackable>
                <Grid.Row>
                  <CenteredGridColumn>
                    <List verticalAlign="middle">
                      <Header
                        style={{
                          textShadow: ' 1px 1px 2px black',
                          fontSize: '3rem',
                        }}
                        inverted
                        as="h1"
                      >
                        Act with Compassion
                      </Header>
                      <Header
                        style={{
                          textShadow: ' 1px 1px 2px black',
                          fontSize: '3rem',
                        }}
                        inverted
                        as="h1"
                      >
                        Live in Hope
                      </Header>
                      <Header
                        style={{
                          textShadow: ' 1px 1px 2px black',
                          fontSize: '3rem',
                        }}
                        inverted
                        as="h1"
                      >
                        Grow in Wisdom
                      </Header>
                    </List>
                  </CenteredGridColumn>
                  <CenteredGridColumn textAlign="center">
                    <Button as={Link} to="/contact" inverted basic size="big">
                      Book Appointment
                    </Button>
                  </CenteredGridColumn>
                </Grid.Row>
              </Grid>
            </Segment>
          </GatsbyJumbotronInnerContainer>

          <Img
            style={{ gridArea: 'main' }}
            fluid={data.sunset.childImageSharp.fluid}
          />
        </GatsbyJumbotron>

        <Divider hidden />
        <FAQS />
      </Layout>
    </>
  )
}

export default IndexPage
