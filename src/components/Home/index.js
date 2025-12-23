import { Component } from 'react'

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

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
  }

  onCloseBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  render() {
    const { showBanner, searchInput } = this.state

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
              <SearchButton type="button">
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
