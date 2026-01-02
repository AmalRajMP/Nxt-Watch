import styled from 'styled-components'

export const VideoDetailsPage = styled.div`
  min-height: 100vh;
  display: flex;
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
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  background-color: #000;
  height: 360px;
`
