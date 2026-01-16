import styled from 'styled-components'

/* Page layout */
export const VideoDetailsPage = styled.div`
  min-height: 100vh;
  display: flex;
  width: 100%;
  padding-top: 64px;
  background-color: ${(props) => (props.isLightTheme ? '#f9f9f9' : '#0f0f0f')};
`

/* Sidebar */
export const SidebarContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 240px;
    flex-shrink: 0;
  }
`

export const LoaderContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

/* Main content */
export const ContentContainer = styled.div`
  flex-grow: 1;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 24px;
  }

  @media screen and (min-width: 1024px) {
    padding: 32px 48px;
  }
`

/* Video player */
export const VideoPlayerContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background-color: black;
  z-index: 1;
  border-radius: 0;

  @media screen and (min-width: 768px) {
    border-radius: 8px;
    overflow: hidden;
  }
`

/* Video details section */
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 18px 14px;

  @media screen and (min-width: 768px) {
    padding: 20px 0;
    gap: 22px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 900px;
    gap: 24px;
  }
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.isLightTheme ? '#1e293b' : '#ffffff')};
  line-height: 1.4;
`

/* Views + date */
export const VideoStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 13px;
  color: ${(props) => (props.isLightTheme ? '#64748b' : '#94a3b8')};
  margin-bottom: 12px;
  border-bottom: 1px solid
    ${(props) => (props.isLightTheme ? '#e2e8f0' : '#313131')};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 18px;
  padding-bottom: 12px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  font-size: 14px;
  cursor: pointer;

  color: ${(props) => (props.isActive ? '#2563eb' : '#64748b')};
`

/* Channel info */
export const ChannelRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`

export const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.isLightTheme ? '#1e293b' : '#ffffff')};
  margin-bottom: 4px;
`

export const SubscribersText = styled.p`
  font-size: 12px;
  color: ${(props) => (props.isLightTheme ? '#64748b' : '#94a3b8')};
`

export const VideoDescription = styled.p`
  font-size: 13px;
  color: ${(props) => (props.isLightTheme ? '#475569' : '#94a3b8')};
  line-height: 1.6;
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
  margin-bottom: 8px;
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
