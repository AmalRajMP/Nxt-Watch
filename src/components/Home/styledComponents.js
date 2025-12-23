import styled from 'styled-components'

export const HomePage = styled.div`
  min-height: 100vh;
  padding: 24px;
  background-color: #f9f9f9;
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

export const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 24px 0;

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
  margin: 24px 0;
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

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e2e8f0;
  }
`
