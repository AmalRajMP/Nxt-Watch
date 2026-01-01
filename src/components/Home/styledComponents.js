import styled from 'styled-components'

export const HomePage = styled.div`
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
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  margin-top: 64px;
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
  font-family: 'Roboto';
  font-size: 16px;
  color: #231f20;
  line-height: 1.5;
  margin-bottom: 16px;
`

export const BannerButton = styled.button`
  width: fit-content;
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid #231f20;
  font-family: 'Roboto';
  font-size: 14px;
  cursor: pointer;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const VideosSection = styled.div`
  background-color: #f9f9f9;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px;

  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 420px;
  max-width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  overflow: hidden;
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: none;
  outline: none;
  font-size: 14px;
  color: #0f172a;

  &::placeholder {
    color: #94a3b8;
  }
`

export const SearchButton = styled.button`
  width: 60px;
  background-color: #f1f5f9;
  border: none;
  border-left: 1px solid #cbd5e1;
  padding: 8px 14px;
  cursor: pointer;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e2e8f0;
  }
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
  color: #1e293b;
  margin-bottom: 8px;
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
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
export const NoSearchResultsContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const NoSearchResultsImage = styled.img`
  width: 300px;
  max-width: 90%;
  margin-bottom: 20px;
`

export const NoSearchResultsHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: #1e293b;
  margin-bottom: 8px;
`

export const NoSearchResultsDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
  margin-bottom: 20px;
  line-height: 1.6;
`
