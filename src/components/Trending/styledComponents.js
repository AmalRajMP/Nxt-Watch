import styled from 'styled-components'

export const TrendingPage = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${(props) => (props.isLightTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const TrendingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background-color: ${(props) => (props.isLightTheme ? '#f4f4f4' : '#181818')};

  @media screen and (min-width: 768px) {
    gap: 16px;
    padding: 24px;
  }
`

export const TrendingIconWrapper = styled.div`
  background-color: ${(props) => (props.isLightTheme ? '#e2e8f0' : '#000000')};
  padding: 8px;
  border-radius: 50%;
`

export const TrendingTitle = styled.h1`
  font-size: 18px;
  margin: 0;
  color: ${(props) => (props.isLightTheme ? '#000000' : '#ffffff')};

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 64px;
`

export const VideosSection = styled.div`
  background-color: ${(props) => (props.isLightTheme ? '#f9f9f9' : '#0f0f0f')};
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const LoaderContainer = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 24px 0 0 0;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
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
  font-size: 24px;
  color: ${(props) => (props.isLightTheme ? '#1e293b' : '#ffffff')};
`

export const FailureDescription = styled.p`
  font-size: 14px;
  color: ${(props) => (props.isLightTheme ? '#475569' : '#94a3b8')};
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;
`
