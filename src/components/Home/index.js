import { Component } from 'react'
import Cookies from 'js-cookie'

import { AiOutlineClose } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'

import Header from '../Header'

import {
  HomePage,
  BannerSection,
  BannerDetails,
  WebsiteLogo,
  BannerText,
  BannerButton,
  CloseButton,
  SearchBarWrapper,
  SearchContainer,
  SearchInput,
  SearchButton,
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

  render() {
    const { showBanner, searchInput, videosList } = this.state
    console.log(videosList)

    return (
      <>
        <Header />
        <HomePage>
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
        </HomePage>
      </>
    )
  }
}

export default Home
