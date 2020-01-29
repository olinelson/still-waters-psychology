import React from 'react'
import { Container, Tab, Responsive } from 'semantic-ui-react'
import { MobileOnlyDiv, DesktopOnlyDiv } from './StyledComponents'

export default ({ panes, mobileBreakPoint, desktopBreakPoint }) => {
  return (
    <Container style={{ minHeight: '50vh' }}>
      <MobileOnlyDiv max={mobileBreakPoint}>
        <Tab
          menu={{
            fluid: true,
            stackable: true,
            // vertical: true,
            stackable: true,
            // tabular: true,
            compact: true,
          }}
          stackable
          panes={panes}
        />
      </MobileOnlyDiv>
      <DesktopOnlyDiv min={desktopBreakPoint}>
        <Tab
          menu={{
            fluid: true,
            stackable: true,
            vertical: true,
            // tabular: true,
            // compact: true,
          }}
          stackable
          panes={panes}
        />
      </DesktopOnlyDiv>
    </Container>
  )
}
