import { Component } from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  VideoDetailsPage,
  SidebarContainer,
  ContentContainer,
  VideoPlayerContainer,
} from './styledComponents'

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const { match } = this.props
    const { params } = match
    const { id } = params

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const videoDetails = data.video_details

      const formattedData = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
      }

      this.setState({ videoDetails: formattedData })
    }
  }

  render() {
    const { videoDetails } = this.state
    const { videoUrl } = videoDetails
    console.log(videoUrl)
    return (
      <>
        <Header />
        <VideoDetailsPage>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>

          <ContentContainer>
            <VideoPlayerContainer>
              {videoUrl && (
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
              )}
            </VideoPlayerContainer>
          </ContentContainer>
        </VideoDetailsPage>
      </>
    )
  }
}

export default VideoItemDetails
