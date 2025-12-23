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
  }

  onCloseBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  render() {
    const { showBanner } = this.state

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
              <SearchInput type="search" placeholder="Search" />
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
