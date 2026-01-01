import { Component } from 'react'
import Cookies from 'js-cookie'

import { ThreeDots } from 'react-loader-spinner'

import { AiOutlineClose } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'

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
    if (!jwtToken) {
      return
    }

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: formattedData,
      })
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure })
    }
  }

  onCloseBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  onSearchVideo = () => {
    this.getHomeVideos()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <ThreeDots type="ThreeDots" color="#3b82f6" height={50} width={50} />
    </LoaderContainer>
  )

  renderNoSearchResultsView = () => (
    <NoSearchResultsContainer>
      <NoSearchResultsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoSearchResultsHeading>No Search results found</NoSearchResultsHeading>
      <NoSearchResultsDescription>
        Try different key words or remove search filter
      </NoSearchResultsDescription>
      <RetryButton onClick={this.getHomeVideos}>Retry</RetryButton>
    </NoSearchResultsContainer>
  )

  renderSuccessView = () => {
    const { videosList } = this.state
    return videosList.length === 0 ? (
      this.renderNoSearchResultsView()
    ) : (
      <VideosList>
        {videosList.map((eachItem) => (
          <VideoItem key={eachItem.id} videoDetails={eachItem} />
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
      <RetryButton onClick={this.getHomeVideos}>Retry</RetryButton>
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
    const { showBanner, searchInput } = this.state

    return (
      <>
        <Header />
        <HomePage>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <ContentContainer>
            {showBanner && (
              <BannerSection>
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
                <CloseButton data-testid="close" onClick={this.onCloseBanner}>
                  <AiOutlineClose size={20} />
                </CloseButton>
              </BannerSection>
            )}
            <VideosSection>
              <SearchBarWrapper>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    value={searchInput}
                    placeholder="Search"
                    onChange={this.onChangeSearchInput}
                  />
                  <SearchButton type="button" onClick={this.onSearchVideo}>
                    <BsSearch />
                  </SearchButton>
                </SearchContainer>
              </SearchBarWrapper>
              {this.renderVideosList()}
            </VideosSection>
          </ContentContainer>
        </HomePage>
      </>
    )
  }
}

export default Home
