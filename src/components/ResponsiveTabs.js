import React from 'react'
import { Tab } from 'semantic-ui-react'
import { MobileOnlyDiv, DesktopOnlyDiv } from './MyStyledComponents'

export default ({ panes }) => {
  return (
    <div style={{ minHeight: '50vh', margin: '1rem' }}>
      <DesktopOnlyDiv>
        <Tab
          menu={{
            fluid: true,
            stackable: true,
            vertical: true,

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
            },

            compact: true,
            fluid: true,
            stackable: true,
            vertical: false,
          }}
          stackable
          panes={panes}
        />
      </MobileOnlyDiv>
    </div>
  )
}
