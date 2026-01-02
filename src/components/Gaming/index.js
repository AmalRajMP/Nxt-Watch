import { Component } from 'react'
import Cookies from 'js-cookie'
import { SiYoutubegaming } from 'react-icons/si'

import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingVideoItem from '../GamingVideoItem'

import {
  GamingPage,
  SidebarContainer,
  ContentContainer,
  GamingHeader,
  GamingIconWrapper,
  GamingTitle,
  VideosSection,
  VideosList,
} from './styledComponents'

class Gaming extends Component {
  state = {
    gamingVideosList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const response = await fetch('https://apis.ccbp.in/videos/gaming', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map((each) => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({ gamingVideosList: updatedData })
    }
  }

  render() {
    const { gamingVideosList } = this.state

    return (
      <>
        <Header />
        <GamingPage>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>

          <ContentContainer>
            <GamingHeader>
              <GamingIconWrapper>
                <SiYoutubegaming size={28} color="#ff0000" />
              </GamingIconWrapper>
              <GamingTitle>Gaming</GamingTitle>
            </GamingHeader>

            <VideosSection>
              <VideosList>
                {gamingVideosList.map((each) => (
                  <GamingVideoItem key={each.id} videoDetails={each} />
                ))}
              </VideosList>
            </VideosSection>
          </ContentContainer>
        </GamingPage>
      </>
    )
  }
}

export default Gaming
