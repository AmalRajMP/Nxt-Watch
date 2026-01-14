import { HiFire } from 'react-icons/hi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'

import {
  SavedVideosPage,
  SavedHeader,
  SavedIconWrapper,
  SavedTitle,
  SidebarContainer,
  ContentContainer,
  VideosSection,
  VideosList,
  NoSavedVideosContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedText,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {(value) => {
      const { savedVideosList } = value
      const isEmpty = savedVideosList.length === 0

      return (
        <>
          <Header />
          <SavedVideosPage>
            <SidebarContainer>
              <Sidebar />
            </SidebarContainer>

            <ContentContainer>
              <SavedHeader>
                <SavedIconWrapper>
                  <HiFire size={24} color="#ff0000" />
                </SavedIconWrapper>
                <SavedTitle>Saved Videos</SavedTitle>
              </SavedHeader>

              {isEmpty ? (
                <NoSavedVideosContainer>
                  <NoSavedImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedHeading>No saved videos found</NoSavedHeading>
                  <NoSavedText>
                    You can save your videos while watching them
                  </NoSavedText>
                </NoSavedVideosContainer>
              ) : (
                <VideosSection>
                  <VideosList>
                    {savedVideosList.map((each) => (
                      <VideoItem key={each.id} videoDetails={each} horizontal />
                    ))}
                  </VideosList>
                </VideosSection>
              )}
            </ContentContainer>
          </SavedVideosPage>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
