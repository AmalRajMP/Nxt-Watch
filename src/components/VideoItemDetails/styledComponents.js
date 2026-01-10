import styled from 'styled-components'

export const VideoDetailsPage = styled.div`
  display: flex;
  width: 100%;
  padding-top: 64px;
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
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`

export const VideoPlayerContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background-color: black;
  z-index: 1;
`
