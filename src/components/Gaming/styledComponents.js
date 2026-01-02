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
  width: calc(100vw - 240px);
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
export const VideosSection = styled.div`
  background-color: #f9f9f9;
  flex-grow: 1;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 20px;

  display: grid;
  gap: 24px;

  /* Mobile: 2 cards */
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 576px) {
    /* Tablet: 3 cards */
    grid-template-columns: repeat(3, 1fr);
  }
`
