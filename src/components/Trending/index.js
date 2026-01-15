import { Component } from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import { HiFire } from 'react-icons/hi'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  TrendingPage,
  TrendingHeader,
  TrendingIconWrapper,
  TrendingTitle,
  SidebarContainer,
  ContentContainer,
  VideosSection,
  VideosList,
  LoaderContainer,
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

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map((eachItem) => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideosList: formattedData,
      })
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure })
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height={50} width={50} />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const { trendingVideosList } = this.state
    return (
      <VideosList>
        {trendingVideosList.map((eachItem) => (
          <VideoItem key={eachItem.id} videoDetails={eachItem} horizontal />
        ))}
      </VideosList>
    )
  }

  renderFailureView = () => (
    <ThemeAndVideoContext.Consumer>
      {(value) => {
        const { isLightTheme } = value

        return (
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
            <RetryButton onClick={this.getTrendingVideos}>Retry</RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  renderVideosList = () => {
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
      <ThemeAndVideoContext.Consumer>
        {(value) => {
          const { isLightTheme } = value

          return (
            <>
              <Header />
              <TrendingPage isLightTheme={isLightTheme}>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>

                <ContentContainer>
                  <TrendingHeader isLightTheme={isLightTheme}>
                    <TrendingIconWrapper isLightTheme={isLightTheme}>
                      <HiFire size={24} color="#ff0000" />
                    </TrendingIconWrapper>
                    <TrendingTitle isLightTheme={isLightTheme}>
                      Trending
                    </TrendingTitle>
                  </TrendingHeader>

                  <VideosSection isLightTheme={isLightTheme}>
                    {this.renderVideosList()}
                  </VideosSection>
                </ContentContainer>
              </TrendingPage>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Trending
