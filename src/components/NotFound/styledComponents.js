import styled from 'styled-components'

export const NotFoundPage = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${(props) => (props.isLightTheme ? '#ffffff' : '#0f0f0f')};
`

export const SidebarContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 240px;
    flex-shrink: 0;
  }
`

export const ContentContainer = styled.div`
  flex-grow: 1;
  margin-top: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const NotFoundImage = styled.img`
  width: 300px;
  max-width: 90%;
`

export const NotFoundHeading = styled.h1`
  font-size: 24px;
  margin: 16px 0 8px 0;
  color: ${(props) => (props.isLightTheme ? '#1e293b' : '#ffffff')};
`

export const NotFoundText = styled.p`
  font-size: 14px;
  color: ${(props) => (props.isLightTheme ? '#475569' : '#94a3b8')};
`
