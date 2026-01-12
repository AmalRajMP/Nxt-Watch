import { Component } from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import { BiLike, BiDislike } from 'react-icons/bi'
import { RiPlayListAddLine } from 'react-icons/ri'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  VideoDetailsPage,
  SidebarContainer,
  LoaderContainer,
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
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress })

    const { match } = this.props
    const { id } = match.params

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

      this.setState({
        videoDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure })
    }
  }

  handleLike = () => {
    this.setState({
      isLiked: true,
      isDisLiked: false,
    })
  }

  handleDisLike = () => {
    this.setState({
      isDisLiked: true,
      isLiked: false,
    })
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height={50} width={50} />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const { videoDetails, isLiked, isDisLiked } = this.state
    const {
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
      channel,
    } = videoDetails

    return (
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
              <ActionButton
                type="button"
                isLiked={isLiked}
                onClick={this.handleLike}
              >
                <BiLike size={18} /> Like
              </ActionButton>
              <ActionButton
                type="button"
                isDisLiked={isDisLiked}
                onClick={this.handleDisLike}
              >
                <BiDislike size={18} /> Dislike
              </ActionButton>
              <ActionButton type="button">
                <RiPlayListAddLine size={18} /> Save
              </ActionButton>
            </ActionButtons>
          </VideoStatsContainer>
          <ChannelRow>
            <ChannelImage src={channel.profileImageUrl} alt="channel logo" />
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
    )
  }

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request.
        <br />
        Please try again.
      </FailureDescription>
      <RetryButton onClick={this.getVideoDetails}>Retry</RetryButton>
    </FailureContainer>
  )

  renderVideoDetails = () => {
    const { apiStatus } = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <VideoDetailsPage>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          {this.renderVideoDetails()}
        </VideoDetailsPage>
      </>
    )
  }
}

export default VideoItemDetails
