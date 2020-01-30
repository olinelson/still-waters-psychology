import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Icon, Divider, List, Segment } from 'semantic-ui-react'

import Header from './header'

import 'semantic-ui-less/semantic.less'

import { SiteContainer } from '../components/MyStyledComponents'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            siteURL
          }
        }
      }
    `}
    render={data => (
      <SiteContainer>
        <div>
          <Helmet
            lang="en"
            title={data.site.siteMetadata.title}
            htmlAttributes={{
              lang: 'en',
            }}
            meta={[
              {
                name: 'description',

                content:
                  'Still Waters Psychology is an adult psychotherapy and psychology service, providing evidence-based care for a range of mental health conditions and life challenges, for adults of all ages and life stages.',
              },
              {
                name: 'viewport',
                content: '"width=device-width,initial-scale=1"',
              },
            ]}
          />

          <Header siteTitle={data.site.siteMetadata.title} />

          {/* <MobileOnlyDiv>
            <Divider hidden />
          </MobileOnlyDiv> */}

          <div style={{ margin: '0 auto', maxWidth: '100rem' }}>{children}</div>
        </div>

        <Divider hidden />

        <Divider hidden />

        <Segment textAlign="center" padded="very">
          <h4>{data.site.siteMetadata.title}</h4>

          <List horizontal inverted={false} divided link size="small">
            <List.Item as={Link} to="/">
              Home
            </List.Item>
            <List.Item as={Link} to="/about">
              About
            </List.Item>
            <List.Item as={Link} to="/services">
              Services
            </List.Item>
            <List.Item as={Link} to="/staff">
              Staff
            </List.Item>
            <List.Item as={Link} to="/research">
              Research
            </List.Item>
            <List.Item as={Link} to="/research">
              Resources
            </List.Item>
            <List.Item as={Link} to="/contact">
              Contact
            </List.Item>
          </List>
          <Divider hidden />
          <small style={{ color: 'grey' }}>
            <Icon name="copyright" />
            {new Date().getFullYear()}
          </small>
          <Divider hidden />
        </Segment>
      </SiteContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
