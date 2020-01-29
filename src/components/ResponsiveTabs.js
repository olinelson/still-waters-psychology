import React from 'react'
import { Container, Tab, Responsive } from 'semantic-ui-react'
import { MobileOnlyDiv, DesktopOnlyDiv } from './StyledComponents'

export default ({ panes, mobileBreakPoint, desktopBreakPoint }) => {
  return (
    <div style={{ minHeight: '50vh', margin: '1rem' }}>
      <DesktopOnlyDiv>
        <Tab
          menu={{
            fluid: true,
            stackable: true,
            vertical: true,
            // fixed: 'bottom',
            // tabular: true,
            compact: true,
          }}
          stackable
          panes={panes}
        />
      </DesktopOnlyDiv>
      <MobileOnlyDiv>
        <Tab
          menu={{
            style: {
              maxWidth: '100% !important',

              // border: '1px solid red',
              // width: '100vw !important',
              // margin: '0 -1rem !important',
            },

            compact: true,
            fluid: true,
            stackable: true,
            vertical: false,
            // secondary: true,
            // fixed: 'bottom',
            // tabular: true,
          }}
          stackable
          panes={panes}
        />
      </MobileOnlyDiv>
    </div>
  )
}
