import React from 'react'
import { Container, Card, Divider, List, Segment } from 'semantic-ui-react'
import { GatsbyJumbotron } from '../components/MyStyledComponents'
import Layout from '../components/layout'

// logos
import blackdog from '../images/logos/black_dog.jpg'
import lifeline from '../images/logos/lifeline.png'
import beyondblue from '../images/logos/beyondblue.png'
import vinnies from '../images/logos/vinnies_logo.png'
import grow from '../images/logos/grow_logo.png'
import quest from '../images/logos/quest_for_life.png'
import mentalHealthAustralia from '../images/logos/mental_health_australia.png'
import wayAhead from '../images/logos/way_ahead.png'
import sane from '../images/logos/sane_blue.jpg'
import mentalHealthCareers from '../images/logos/mental_health_careers.png'
import headToHealth from '../images/logos/head_to_health.png'
import openMinds from '../images/logos/open_minds.png'
import acon from '../images/logos/acon.png'
import copmi from '../images/logos/copmi.png'

import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
export default function Resources() {
  const data = useStaticQuery(graphql`
    query {
      blueWater: file(
        relativePath: { regex: "/(images/resources/image_18_Blue_water)/" }
      ) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      therapy: file(
        relativePath: { regex: "/(images/resources/image_9_Therapy_1)/" }
      ) {
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
        <Img alt="blue water" fluid={data.blueWater.childImageSharp.fluid} />
      </GatsbyJumbotron>

      <Container text>
        <Divider hidden />
        <h1>In the event of a mental health emergency</h1>
        <p>
          If you are experiencing an immediate mental health crisis and feel at
          risk regarding your safety, it is recommended that you:
        </p>
      </Container>

      <Divider hidden />

      <Container text>
        <Segment>
          <List divided relaxed verticalAlign="middle">
            <List.Item>
              <List.Icon size="huge" name="phone" />
              <List.Content>
                <List.Header>
                  Call 000 if at imminent risk of harming yourself or others.
                </List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon size="huge" name="doctor" />
              <List.Content>
                <List.Header> Contact your GP</List.Header>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon size="huge" name="user" />
              <List.Content>
                <List.Header>Advise a family member or friend</List.Header>
              </List.Content>
            </List.Item>

            <List.Item>
              <List.Icon size="huge" name="slideshare" />
              <List.Content>
                <List.Header>
                  Contact the Mental Health Line on 1800 011 511
                </List.Header>
                <List.Description>
                  You can speak with someone who will be able to guide you
                  through the steps to obtaining support.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon size="huge" name="medkit" />
              <List.Content>
                <List.Header>
                  Present yourself at Emergency at your local hospital
                </List.Header>
                <List.Description></List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </Container>

      <Divider hidden />

      <Container text>
        <p>
          You can also contact the following numbers to seek help or to speak
          with someone about your situation. In addition, the{' '}
          <a href="https://www.health.nsw.gov.au/public/Pages/default.aspx ">
            Health NSW website
          </a>{' '}
          (www.health.nsw.gov.au) provides details and contact numbers for{' '}
          <a href="https://www.health.nsw.gov.au/mentalhealth/Pages/contact-service.aspx">
            mental health services
          </a>{' '}
          across the country.
        </p>
      </Container>

      <Divider hidden />

      <Container text>
        <Segment>
          <List divided relaxed verticalAlign="middle">
            <List.Item>
              <List.Icon size="big" name="phone" />
              <List.Content>
                <List.Header>
                  <a href="tel:131114">Lifeline 13 11 14</a>
                </List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon size="big" name="phone" />
              <List.Content>
                <List.Header>
                  <a href="tel:1800551800">Kids Helpline 1800 55 1800</a>
                </List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon size="big" name="phone" />
              <List.Content>
                <List.Header>
                  <a href="tel:1300789978">MensLine 1300 78 99 78</a>
                </List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon size="big" name="phone" />
              <List.Content>
                <List.Header>
                  <a href="tel:1300659467">
                    Suicide Call Back Service 1300 659 467
                  </a>
                </List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </Container>

      <Divider hidden />

      {/* <Jumbotron src={therapy} /> */}
      <GatsbyJumbotron>
        <Img
          alt="people in therapy"
          fluid={data.therapy.childImageSharp.fluid}
        />
      </GatsbyJumbotron>

      <Divider hidden />

      <Container text>
        <h1>Support Organizations</h1>

        <p>
          There are a range of state and national organizations and services
          which provide information and support for those experiencing mental
          health issues, especially in the context of a crisis. Below are links
          to some of these services:
        </p>
      </Container>

      <Divider hidden />
      <Container>
        <Card.Group centered>
          <Card image={blackdog} href="https://www.blackdoginstitute.org.au/" />
          <Card
            image={lifeline}
            style={{
              background: '#013D79',
              justifyContent: 'center',
              padding: '.5rem',
            }}
            href="https://www.lifeline.org.au/"
          />
          <Card
            image={beyondblue}
            style={{
              justifyContent: 'center',
              padding: '.5rem',
            }}
            href="https://www.beyondblue.org.au/"
          />
          <Card
            image={vinnies}
            style={{
              justifyContent: 'center',
              padding: '.5rem',
              background: '#004A99',
            }}
            href="https://www.vinnies.org.au/"
          />
          <Card
            image={grow}
            style={{
              justifyContent: 'center',
              padding: '.5rem',
            }}
            href="https://www.grow.org.au/"
          />
          <Card
            image={quest}
            style={{
              justifyContent: 'center',
              padding: '.5rem',
            }}
            href="https://www.questforlife.com.au/"
          />
          <Card
            style={{
              justifyContent: 'center',
              padding: '.5rem',
            }}
            href="https://mhaustralia.org/"
            image={mentalHealthAustralia}
          />
          <Card
            image={wayAhead}
            style={{
              justifyContent: 'center',
              padding: '.5rem',
            }}
            href="https://wayahead.org.au/"
          />
          <Card
            style={{
              justifyContent: 'center',
            }}
            image={sane}
            href="hhttps://www.sane.org"
          />
          <Card
            image={mentalHealthCareers}
            style={{
              justifyContent: 'center',
              padding: '.5rem',
            }}
            href="https://www.mentalhealthcarersaustralia.org.au/"
          />

          <Card
            image={headToHealth}
            header="Mind Health Connect"
            href="https://headtohealth.gov.au/"
          />

          <Card
            style={{
              justifyContent: 'center',
              padding: '.5rem',
            }}
            image={openMinds}
            href="https://www.openminds.org.au/"
          />
          <Card
            style={{
              justifyContent: 'center',
              padding: '1rem',
            }}
            size="small"
            image={acon}
            href="https://www.acon.org.au/"
          />
          <Card
            style={{
              justifyContent: 'center',
              padding: '1rem',
            }}
            size="small"
            image={copmi}
            href="https://http://www.copmi.net.au/"
          />
        </Card.Group>
      </Container>
    </Layout>
  )
}
