import { Component } from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

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
  LoaderContainer,
  VideosList,
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
class Gaming extends Component {
  state = { apiStatus: apiStatusConstants.initial, gamingVideosList: [] }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress })

    const jwtToken = Cookies.get('jwt_token')

    const response = await fetch('https://apis.ccbp.in/videos/gaming', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })

    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map((each) => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideosList: formattedData,
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
    const { gamingVideosList } = this.state
    return (
      <VideosList>
        {gamingVideosList.map((each) => (
          <GamingVideoItem key={each.id} videoDetails={each} />
        ))}
      </VideosList>
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
      <RetryButton onClick={this.getGamingVideos}>Retry</RetryButton>
    </FailureContainer>
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

            <VideosSection>{this.renderVideosList()}</VideosSection>
          </ContentContainer>
        </GamingPage>
      </>
    )
  }
}

export default Gaming
