import styled from 'styled-components'

export const SavedVideosPage = styled.div`
  min-height: 100vh;
  display: flex;
`

export const SavedHeader = styled.div`
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

export const SavedIconWrapper = styled.div`
  background-color: #e2e8f0;
  padding: 8px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    padding: 12px;
  }
`

export const SavedTitle = styled.h1`
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
  width: 100%;
  background-color: #f9f9f9;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const VideosList = styled.ul`
  list-style-type: none;
  margin: 24px 0 0 0;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`

/* Empty State */

export const NoSavedVideosContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
`

export const NoSavedImage = styled.img`
  width: 280px;
  max-width: 90%;
`

export const NoSavedHeading = styled.h1`
  font-size: 22px;
  margin: 16px 0 8px 0;
  color: #1e293b;
`

export const NoSavedText = styled.p`
  font-size: 14px;
  color: #475569;
`
