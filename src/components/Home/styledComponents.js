import styled from 'styled-components'

export const HomePage = styled.div`
  min-height: 100vh;
  background-color: ${(props) => (props.isLightTheme ? '#f9f9f9' : '#0f0f0f')};
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

  @media screen and (min-width: 768px) {
    margin-left: 240px;
  }
`

export const BannerSection = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  position: relative;
`

export const BannerDetails = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 420px;
`

export const WebsiteLogo = styled.img`
  width: 140px;
  margin-bottom: 16px;
`

export const BannerText = styled.p`
  font-size: 16px;
  color: #231f20;
  margin-bottom: 16px;
`

export const BannerButton = styled.button`
  width: fit-content;
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid #231f20;
  font-size: 14px;
  cursor: pointer;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const VideosSection = styled.div`
  background-color: ${(props) => (props.isLightTheme ? '#f9f9f9' : '#181818')};
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const SearchBarWrapper = styled.div`
  width: 100%;
  padding: 20px;
`

export const SearchContainer = styled.div`
  display: flex;
  width: 420px;
  max-width: 100%;
  border: 1px solid ${(props) => (props.isLightTheme ? '#cbd5e1' : '#424242')};
  border-radius: 4px;
  overflow: hidden;
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: none;
  outline: none;
  font-size: 14px;
  background-color: ${(props) => (props.isLightTheme ? '#ffffff' : '#0f0f0f')};
  color: ${(props) => (props.isLightTheme ? '#0f172a' : '#ffffff')};

  &::placeholder {
    color: #94a3b8;
  }
`

export const SearchButton = styled.button`
  width: 60px;
  background-color: ${(props) => (props.isLightTheme ? '#f1f5f9' : '#313131')};
  border: none;
  border-left: 1px solid
    ${(props) => (props.isLightTheme ? '#cbd5e1' : '#424242')};
  cursor: pointer;
  color: ${(props) => (props.isLightTheme ? '#0f172a' : '#ffffff')};
`

export const LoaderContainer = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0 20px;
  margin-top: 24px;
  display: grid;
  gap: 24px;

  grid-template-columns: 1fr;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const FailureContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 20px;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  cursor: pointer;
`

export const NoSearchResultsContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const NoSearchResultsImage = styled.img`
  width: 300px;
  max-width: 90%;
  margin-bottom: 20px;
`

export const NoSearchResultsHeading = styled.h1`
  font-size: 22px;
  color: ${(props) => (props.isLightTheme ? '#1e293b' : '#ffffff')};
  margin-bottom: 8px;
`

export const NoSearchResultsDescription = styled.p`
  font-size: 14px;
  color: ${(props) => (props.isLightTheme ? '#475569' : '#94a3b8')};
  margin-bottom: 20px;
`
