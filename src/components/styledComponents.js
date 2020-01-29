import styled from 'styled-components'
import { Header, Container, Grid, Segment, Message } from 'semantic-ui-react'

import { css } from 'styled-components'

export const mobile = inner => css`
  @media (max-width: ${1000 / 16}em) {
    ${inner}
  }
`

export const phone = inner => css`
  @media (max-width: ${650 / 16}em) {
    ${inner}
  }
`
export const desktop = inner => css`
  @media (min-width: ${1000 / 16}em) {
    ${inner}
  }
`

export const JumboHeader = styled(Header)`
  font-size: 5rem;
  color: white;
  width: 100%;
  z-index: 3 !important;
`

export const Jumbotron = styled.div`
  background-position: ${props =>
    props.right ? 'right 15vw top 0% !important' : 'center !important'};
  background-size: ${props =>
    props.contain ? 'contain !important' : 'cover !important'};
  background-repeat: no-repeat !important;
  background: ${props => `url('${props.src}')`};
  height: ${props => (props.fullHeight ? '85vh !important' : '50vh')};
  display: grid;
  @media only screen and (max-width: 1024px) {
    margin-top: -1rem;
  }
}
`
export const JumboMessage = styled.div`
  background-color: rgba(0, 0, 0, 0) !important;
  margin: auto;
  justify-self: ;
  padding: 2rem;
`

export const SiteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 7rem;
  min-height: 100vh;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d3d3d3;
`

export const GridContainer = styled(Container)`
  min-height: 50vh;
  display: grid !important;
  align-content: center;
  justify-items: center;
`
export const CarouselImage = styled.div`
  background: url(${props => props.src});
  height: 50vh;
  width: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const CenteredGridColumn = styled(Grid.Column)`
  display: flex !important;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const ImageDiv = styled.div`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  min-height: ${props => props.minHeight || 'none'};
  background: ${props => `url('${props.src}')`};
  background-size: cover;
  grid-area: ${props => `${props.gridArea}`};
  background-position: center;
`
export const CreditContainer = styled.div`
  padding: 1rem;
  color: white;
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
  align-items: flex-end;
`

export const MobileOnlyDiv = styled.div`
  // display: none;
  ${desktop(css`
    display: none;
  `)}
`
export const DesktopOnlyDiv = styled.div`
  // display: none;
  ${mobile(css`
    display: none;
  `)}
`

export const Quote = styled(Message)`
  background-color: ${props => props.backgroundColor} !important;
  color: ${props => props.textColor} !important;
  box-shadow: ${props =>
    `0px 0px 0px 1px ${props.textColor}, 0px 0px 0px 0px rgba(0, 0, 0, 0)!important`};
`
