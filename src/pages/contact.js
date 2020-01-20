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

export default function Contact() {
  const panels = [
    // {
    //   key: "0",
    //   title: "Wheelchair Accessibility",
    //   content:
    //     "There is wheelchair access at the front entry to the practice and wheelchair accessible toilet facilities."
    // },
    {
      key: '1',
      title: 'Late Arrival Policy',
      content:
        'Where clients arrive late for a session, the session will still end at the scheduled time, meaning that session will be shorter on that occasion. Time has been reserved for you and only you at the agreed upon time, with other people are scheduled after your time. This approach ensures those attending after you are not kept waiting. Thank you for your understanding in relation to this matter.',
    },
    {
      key: '3',
      title: 'No Show Policy',
      content:
        'Where clients fail to attend an appointment and there is no communication regarding their absence the normal session fee will be applied.',
    },
    {
      key: '5',
      title: 'Cancellation policy',
      content: {
        content: (
          <>
            <p>
              We respect that your time is valuable, and we appreciate that you
              understand ours is too. Regretfully cancellation fees are
              necessary as it unlikely that your spot can be given to another
              client at such short note.
            </p>
            <ul>
              <li>
                A 60% cancellation fee will be applied when clients cancel
                within 24 hours of their appointment.
              </li>
              <li>
                A 40% cancellation fee will be applied when clients cancel
                within 48 hours of their appointment.
              </li>
            </ul>

            <p>
              When cancelling a session, please advise as to the reason for the
              cancellation. Please note Medicare do not reimburse cancelled
              fees, while the NDIA cover a limited number of cancellation fees.
              If you have concerns about this policy, please discuss them with
              your therapist.
            </p>

            <p>
              There are rare occasions when, with regret, your therapist needs
              to cancel a session due to unexpected circumstances. Where this
              occurs, you will be offered a replacement appointment at a
              mutually convenient time, at the normal session fee. We apologise
              for any inconvenience arising from these rare occasions.
            </p>
          </>
        ),
      },
    },
  ]

  return (
    <Layout>
      <Jumbotron imgDir="images/image_16/" src={pathImg} />

      <Container text>
        <Divider hidden />

        <h1>Starting the journey</h1>

        <h4>Booking the first appointment</h4>

        <p>
          Taking the first step towards improving the quality of your
          psychological health, sense of wellbeing and relationships may feel
          daunting, especially if you have no prior experience with counselling.{' '}
        </p>

        <p>
          You can arrange an appointment by phoning{' '}
          <a href="tel:0466231620">0466 231 620</a> or by sending an enquiry
          using the form below.{' '}
        </p>

        <p>
          We will guide you through setting up an initial appointment and will
          happily answer any questions you might have about counselling/therapy.{' '}
        </p>

        <ContactForm />

        <Divider />

        <h1>Location</h1>

        <p>
          The practice is located just off Narellan Road, Narellan. It is housed
          within the Narellan Community Congregational Church. Upon arrival,
          please enter the church foyer and turn left to find the practice
          reception area. Please make yourself comfortable in the waiting area.
          Please note the church reception desk is not always occupied.
        </p>

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
