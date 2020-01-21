import React from 'react'
import { Container, Tab, Responsive } from 'semantic-ui-react'

export default ({ panes }) => {
  return (
    <Container style={{ minHeight: '50vh' }}>
      <Responsive
        maxWidth={Responsive.onlyTablet.maxWidth}
        as={Tab}
        menu={{
          fluid: true,
          stackable: true,
          // vertical: true,
          // tabular: true,
          // compact: true,
        }}
        stackable
        panes={panes}
      />
      <Responsive
        as={Tab}
        menu={{
          fluid: true,
          stackable: true,
          vertical: true,
          // tabular: true,
          // compact: true,
        }}
        stackable
        panes={panes}
        minWidth={Responsive.onlyTablet.maxWidth}
      />
    </Container>
  )
}
