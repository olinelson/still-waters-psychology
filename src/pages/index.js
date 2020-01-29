import React from 'react'

// components
import {
  Jumbotron,
  JumboMessage,
  JumboHeader,
  CenteredGridColumn,
  ImageDiv,
  CreditContainer,
} from '../components/styledComponents'
import Events from '../components/Events'
import { Link } from 'gatsby'
import {
  Button,
  Container,
  Divider,
  Image,
  Grid,
  Segment,
  List,
  Header,
} from 'semantic-ui-react'
import Layout from '../components/layout'

// images
import stillWaters from '../images/resources/image_1_Still_Waters_High_Resolution.jpg'
import whiteMainLogo from '../images/logos/white_logo.png'
import peacefulHeart from '../images/resources/peaceful_heart.jpg'
import stillMind from '../images/resources/still_mind.jpg'
import calmSpirit from '../images/resources/Image_22_Woman_on_rock.jpg'
import restoredSoul from '../images/resources/Image_23_Man_on_rock.jpg'
import sunset from '../images/resources/image_2_Sunset.jpg'
import FAQS from '../components/Faqs'

const IndexPage = ({ location }) => (
  <>
    <Layout location={location}>
      <Jumbotron location={location} fullHeight src={stillWaters}>
        <JumboMessage>
          <JumboHeader size="huge" as={'h1'} inverted>
            <Image src={whiteMainLogo} size="large" />
          </JumboHeader>
        </JumboMessage>
      </Jumbotron>
      <Divider hidden />

      <Container text>
        <Segment
          size="big"
          basic
          content="Still Waters Psychology is an adult psychotherapy and psychology
          service, providing evidence-based care for a range of mental health
          conditions and life challenges, for adults of all ages and life
          stages."
        />

        <Segment>
          <blockquote style={{ color: 'inherit' }}>
            <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>
              "My vision is to support, equip and encourage individuals and
              communities to heal, grow and flourish"
            </p>

            <figcaption style={{ fontSize: '1rem', textAlign: 'right' }}>
              &mdash; Dr Marie-Thérèse Proctor
            </figcaption>
          </blockquote>
        </Segment>

        {/* <Divider /> */}

        <Segment
          size="big"
          basic
          content="To achieve this vision, Still Waters Psychology has a strengths-based,
          recovery-oriented focus in its provision of care, guided by
          trauma-informed and relationally focused models of care."
        />

        <Segment>
          <blockquote style={{ color: 'inherit' }}>
            <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>
              "When healing, growth and flourishing occurs, individuals have
              scope to realise their personal and professional potential, while
              communities become supportive, nurturing and caring spaces, able
              to respond in healthy and positive ways to the needs of its
              members. Positive change in the individual can filter through,
              helping to form healthier communities. In turn, healthy
              communities become the foundation of healthy nations”
            </p>

            <figcaption style={{ fontSize: '1rem', textAlign: 'right' }}>
              &mdash; Dr Marie-Thérèse Proctor
            </figcaption>
          </blockquote>
        </Segment>

        <Segment
          basic
          size="big"
          content=" Still Waters Psychology can support people of varied worldviews and
          perspectives to live life in ways which align with their personal
          values, beliefs and life goals. As part of this process clients are
          encouraged to foster:"
        />
      </Container>

      <Segment vertical basic>
        <Grid columns={2} padded relaxed stackable>
          <Grid.Row>
            <CenteredGridColumn>
              <ImageDiv width="20rem" height="20rem" src={stillMind} />

              <h2>A still mind</h2>
              <Divider hidden />
            </CenteredGridColumn>

            <CenteredGridColumn>
              <ImageDiv width="20rem" height="20rem" src={peacefulHeart} />

              <h2>A peaceful heart</h2>
              <Divider hidden />
            </CenteredGridColumn>

            <CenteredGridColumn>
              <ImageDiv width="20rem" height="20rem" src={calmSpirit} />

              <h2>A calm spirit</h2>
              <Divider hidden />
            </CenteredGridColumn>

            <CenteredGridColumn>
              <ImageDiv
                width="20rem"
                height="20rem"
                alt="Man on rock by Marius Venter from Pexels"
                src={restoredSoul}
              />

              <h2>A restored soul</h2>
              <Divider hidden />
            </CenteredGridColumn>
          </Grid.Row>
        </Grid>
      </Segment>

      <Container text>
        <Segment padded="very">
          <blockquote style={{ color: 'inherit' }}>
            <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>
              “I am committed to creating a safe and supportive space in which,
              together, client and therapist, can address the client’s needs and
              concerns. I value relationships and collaboration, these central
              to the way I engage with our clients”.
            </p>

            <figcaption style={{ fontSize: '1rem', textAlign: 'right' }}>
              &mdash; Dr Marie-Thérèse Proctor
            </figcaption>
          </blockquote>
        </Segment>

        <Segment size="big" basic>
          <h1>Practice Specialisations</h1>
          <p>
            In addition to general adult mental health services, Still Waters
            Psychology offers psychological care in four key areas:{' '}
          </p>
          <ul>
            <li>Spirituality and Mental Health </li>
            <li>Carers’ Health and Wellbeing</li>
            <li>Grief, Loss and Times of Change</li>
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
            <li>Community groups focused on general mental health.</li>
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

      <Jumbotron fullHeight src={sunset}>
        <JumboMessage style={{ width: '90vw' }}>
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
        </JumboMessage>

        {/* <CreditContainer></CreditContainer> */}
      </Jumbotron>

      <Divider hidden />
      <FAQS />
    </Layout>
  </>
)

export default IndexPage
