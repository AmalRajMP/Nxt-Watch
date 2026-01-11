import { Component } from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import { BiLike, BiDislike } from 'react-icons/bi'
import { RiPlayListAddLine } from 'react-icons/ri'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  VideoDetailsPage,
  SidebarContainer,
  ContentContainer,
  VideoPlayerContainer,
  VideoDetailsContainer,
  VideoTitle,
  VideoStatsContainer,
  ActionButtons,
  ActionButton,
  ChannelRow,
  ChannelImage,
  ChannelDetails,
  ChannelName,
  SubscribersText,
  VideoDescription,
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
    const { id } = match.params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const video = data.video_details

      const formattedData = {
        id: video.id,
        title: video.title,
        videoUrl: video.video_url,
        viewCount: video.view_count,
        publishedAt: video.published_at,
        description: video.description,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
          subscriberCount: video.channel.subscriber_count,
        },
      }

      this.setState({ videoDetails: formattedData })
    }
  }

  render() {
    const { videoDetails } = this.state
    const {
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
      channel = {},
    } = videoDetails

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
                  playsinline
                />
              )}
            </VideoPlayerContainer>
            <VideoDetailsContainer>
              <VideoTitle>{title}</VideoTitle>
              <VideoStatsContainer>
                <p>
                  {viewCount} views • {publishedAt}
                </p>

                <ActionButtons>
                  <ActionButton>
                    <BiLike size={18} /> Like
                  </ActionButton>
                  <ActionButton>
                    <BiDislike size={18} /> Dislike
                  </ActionButton>
                  <ActionButton>
                    <RiPlayListAddLine size={18} /> Save
                  </ActionButton>
                </ActionButtons>
              </VideoStatsContainer>
              <ChannelRow>
                <ChannelImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <ChannelDetails>
                  <ChannelName>{channel.name}</ChannelName>
                  <SubscribersText>
                    {channel.subscriberCount} subscribers
                  </SubscribersText>
                </ChannelDetails>
              </ChannelRow>
              <VideoDescription>{description}</VideoDescription>{' '}
            </VideoDetailsContainer>
          </ContentContainer>
        </VideoDetailsPage>
      </>
    )
  }
}

export default VideoItemDetails
