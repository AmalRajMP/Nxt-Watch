import styled from 'styled-components'

export const GamingPage = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${(props) => (props.isLightTheme ? '#ffffff' : '#0f0f0f')};
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
  background-color: ${(props) => (props.isLightTheme ? '#f4f4f4' : '#181818')};
`

export const GamingIconWrapper = styled.div`
  background-color: ${(props) => (props.isLightTheme ? '#e2e8f0' : '#0f0f0f')};
  padding: 12px;
  border-radius: 50%;
`

export const GamingTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  margin: 0;
  color: ${(props) => (props.isLightTheme ? '#1e293b' : '#ffffff')};
`

export const LoaderContainer = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 300px;
  max-width: 90%;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${(props) => (props.isLightTheme ? '#1e293b' : '#ffffff')};
  margin-bottom: 8px;
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${(props) => (props.isLightTheme ? '#475569' : '#94a3b8')};
  margin-bottom: 20px;
  line-height: 1.6;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;
  outline: none;
`

export const VideosSection = styled.div`
  background-color: ${(props) => (props.isLightTheme ? '#f9f9f9' : '#0f0f0f')};
  flex-grow: 1;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 20px;
  display: grid;
  gap: 24px;

  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
