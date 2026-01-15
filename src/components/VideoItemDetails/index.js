import { Component } from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import { BiLike, BiDislike } from 'react-icons/bi'
import { RiPlayListAddLine } from 'react-icons/ri'

import Loader from 'react-loader-spinner'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

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

    const response = await fetch(apiUrl, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    })

    if (response.ok) {
      const data = await response.json()
      const video = data.video_details

      const formattedData = {
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url, // ✅ ADD THIS LINE
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
    this.setState({ isLiked: true, isDisLiked: false })
  }

  handleDisLike = () => {
    this.setState({ isDisLiked: true, isLiked: false })
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height={50} width={50} />
    </LoaderContainer>
  )

  renderSuccessView = (isLightTheme) => {
    const { videoDetails, isLiked, isDisLiked } = this.state
    const {
      id,
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
      channel,
    } = videoDetails

    return (
      <ThemeAndVideoContext.Consumer>
        {(value) => {
          const { savedVideosList, addOrRemoveSavedVideo } = value
          const isSaved = savedVideosList.find((item) => item.id === id)

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
                  />
                )}
              </VideoPlayerContainer>

              <VideoDetailsContainer>
                <VideoTitle isLightTheme={isLightTheme}>{title}</VideoTitle>

                <VideoStatsContainer isLightTheme={isLightTheme}>
                  <p>
                    {viewCount} views • {publishedAt}
                  </p>

                  <ActionButtons>
                    <ActionButton
                      type="button"
                      isActive={isLiked}
                      isLightTheme={isLightTheme}
                      onClick={this.handleLike}
                    >
                      <BiLike size={18} /> Like
                    </ActionButton>

                    <ActionButton
                      type="button"
                      isActive={isDisLiked}
                      isLightTheme={isLightTheme}
                      onClick={this.handleDisLike}
                    >
                      <BiDislike size={18} /> Dislike
                    </ActionButton>

                    <ActionButton
                      type="button"
                      isActive={isSaved}
                      isLightTheme={isLightTheme}
                      onClick={() => addOrRemoveSavedVideo(videoDetails)}
                    >
                      <RiPlayListAddLine size={18} />
                      {isSaved ? 'Saved' : 'Save'}
                    </ActionButton>
                  </ActionButtons>
                </VideoStatsContainer>

                <ChannelRow>
                  <ChannelImage
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <ChannelDetails>
                    <ChannelName isLightTheme={isLightTheme}>
                      {channel.name}
                    </ChannelName>
                    <SubscribersText isLightTheme={isLightTheme}>
                      {channel.subscriberCount} subscribers
                    </SubscribersText>
                  </ChannelDetails>
                </ChannelRow>

                <VideoDescription isLightTheme={isLightTheme}>
                  {description}
                </VideoDescription>
              </VideoDetailsContainer>
            </ContentContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }

  renderFailureView = (isLightTheme) => (
    <FailureContainer>
      <FailureImage
        src={
          isLightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }
        alt="failure view"
      />
      <FailureHeading isLightTheme={isLightTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailureDescription isLightTheme={isLightTheme}>
        We are having some trouble to complete your request.
        <br />
        Please try again.
      </FailureDescription>
      <RetryButton onClick={this.getVideoDetails}>Retry</RetryButton>
    </FailureContainer>
  )

  renderVideoDetails = (isLightTheme) => {
    const { apiStatus } = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView(isLightTheme)
      case apiStatusConstants.failure:
        return this.renderFailureView(isLightTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {(value) => {
          const { isLightTheme } = value

          return (
            <>
              <Header />
              <VideoDetailsPage isLightTheme={isLightTheme}>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                {this.renderVideoDetails(isLightTheme)}
              </VideoDetailsPage>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoItemDetails
