import { Component } from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import { AiOutlineClose } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import Header from '../Header'
import VideoItem from '../VideoItem'
import Sidebar from '../Sidebar'

import {
  HomePage,
  SidebarContainer,
  ContentContainer,
  BannerSection,
  BannerDetails,
  WebsiteLogo,
  BannerText,
  BannerButton,
  CloseButton,
  VideosSection,
  SearchBarWrapper,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  VideosList,
  NoSearchResultsContainer,
  NoSearchResultsImage,
  NoSearchResultsHeading,
  NoSearchResultsDescription,
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

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress })
    const { searchInput } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (!jwtToken) return

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: { Authorization: `Bearer ${jwtToken}` },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const formattedData = data.videos.map((each) => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: formattedData,
      })
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure })
    }
  }

  onCloseBanner = () => {
    this.setState({ showBanner: false })
  }

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  onSearchVideo = () => {
    this.getHomeVideos()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height={50} width={50} />
    </LoaderContainer>
  )

  renderNoSearchResultsView = (isLightTheme) => (
    <NoSearchResultsContainer>
      <NoSearchResultsImage
        src={
          isLightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-dark-theme-img.png'
        }
        alt="no videos"
      />
      <NoSearchResultsHeading isLightTheme={isLightTheme}>
        No Search results found
      </NoSearchResultsHeading>
      <NoSearchResultsDescription isLightTheme={isLightTheme}>
        Try different key words or remove search filter
      </NoSearchResultsDescription>
      <RetryButton onClick={this.getHomeVideos}>Retry</RetryButton>
    </NoSearchResultsContainer>
  )

  renderSuccessView = (isLightTheme) => {
    const { videosList } = this.state
    return videosList.length === 0 ? (
      this.renderNoSearchResultsView(isLightTheme)
    ) : (
      <VideosList>
        {videosList.map((each) => (
          <VideoItem key={each.id} videoDetails={each} />
        ))}
      </VideosList>
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
      <RetryButton onClick={this.getHomeVideos}>Retry</RetryButton>
    </FailureContainer>
  )

  renderVideosList = (isLightTheme) => {
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
    const { showBanner, searchInput } = this.state

    return (
      <ThemeAndVideoContext.Consumer>
        {(value) => {
          const { isLightTheme } = value

          return (
            <>
              <Header />
              <HomePage data-testid="home" isLightTheme={isLightTheme}>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>

                <ContentContainer>
                  {showBanner && (
                    <BannerSection data-testid="banner">
                      <BannerDetails>
                        <WebsiteLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <BannerButton type="button">GET IT NOW</BannerButton>
                      </BannerDetails>

                      <CloseButton
                        data-testid="close"
                        onClick={this.onCloseBanner}
                      >
                        <AiOutlineClose size={20} />
                      </CloseButton>
                    </BannerSection>
                  )}

                  <VideosSection isLightTheme={isLightTheme}>
                    <SearchBarWrapper>
                      <SearchContainer isLightTheme={isLightTheme}>
                        <SearchInput
                          type="search"
                          value={searchInput}
                          placeholder="Search"
                          onChange={this.onChangeSearchInput}
                          isLightTheme={isLightTheme}
                        />
                        <SearchButton
                          type="button"
                          onClick={this.onSearchVideo}
                          isLightTheme={isLightTheme}
                          data-testid="searchButton"
                        >
                          <BsSearch />
                        </SearchButton>
                      </SearchContainer>
                    </SearchBarWrapper>

                    {this.renderVideosList(isLightTheme)}
                  </VideosSection>
                </ContentContainer>
              </HomePage>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
