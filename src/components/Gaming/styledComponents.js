import styled from 'styled-components'

export const GamingPage = styled.div`
  min-height: 100vh;
  display: flex;
`

export const SidebarContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 240px;
  }
`

export const ContentContainer = styled.div`
  flex-grow: 1;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
`

export const GamingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background-color: #f4f4f4;
`

export const GamingIconWrapper = styled.div`
  background-color: #e2e8f0;
  padding: 12px;
  border-radius: 50%;
`

export const GamingTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  margin: 0;
`
