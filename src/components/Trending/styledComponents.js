import styled from 'styled-components'

export const TrendingPage = styled.div`
  min-height: 100vh;
  display: flex;
`

export const TrendingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background-color: #f4f4f4;

  @media screen and (min-width: 768px) {
    gap: 16px;
    padding: 24px;
  }
`

export const TrendingIconWrapper = styled.div`
  background-color: #e2e8f0;
  padding: 8px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    padding: 12px;
  }
`

export const TrendingTitle = styled.h1`
  font-size: 18px;
  margin: 0;

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
  background-color: #f9f9f9;
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
