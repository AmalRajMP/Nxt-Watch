import { Component } from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  VideoDetailsPage,
  SidebarContainer,
  ContentContainer,
  VideoPlayerContainer,
} from './styledComponents'

class VideoItemDetails extends Component {
  render() {
    return (
      <>
        <Header />
        <VideoDetailsPage>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>

          <ContentContainer>
            <VideoPlayerContainer></VideoPlayerContainer>
          </ContentContainer>
        </VideoDetailsPage>
      </>
    )
  }
}

export default VideoItemDetails
