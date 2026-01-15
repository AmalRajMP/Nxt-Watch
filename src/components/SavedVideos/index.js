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
      const { savedVideosList, isLightTheme } = value
      const isEmpty = savedVideosList.length === 0

      const noSavedImg = isLightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'

      return (
        <>
          <Header />
          <SavedVideosPage isLightTheme={isLightTheme}>
            <SidebarContainer>
              <Sidebar />
            </SidebarContainer>

            <ContentContainer>
              <SavedHeader isLightTheme={isLightTheme}>
                <SavedIconWrapper isLightTheme={isLightTheme}>
                  <HiFire size={24} color="#ff0000" />
                </SavedIconWrapper>
                <SavedTitle isLightTheme={isLightTheme}>
                  Saved Videos
                </SavedTitle>
              </SavedHeader>

              {isEmpty ? (
                <NoSavedVideosContainer>
                  <NoSavedImage src={noSavedImg} alt="no saved videos" />
                  <NoSavedHeading isLightTheme={isLightTheme}>
                    No saved videos found
                  </NoSavedHeading>
                  <NoSavedText isLightTheme={isLightTheme}>
                    You can save your videos while watching them
                  </NoSavedText>
                </NoSavedVideosContainer>
              ) : (
                <VideosSection isLightTheme={isLightTheme}>
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
