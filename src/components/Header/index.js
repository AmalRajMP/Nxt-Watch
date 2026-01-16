import { Link, withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import { FaMoon } from 'react-icons/fa'
import { BsSun } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiLogOut } from 'react-icons/fi'
import { AiFillHome } from 'react-icons/ai'
import { HiFire } from 'react-icons/hi'
import { SiYoutubegaming } from 'react-icons/si'
import { MdPlaylistAdd } from 'react-icons/md'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

export const sidebarItemsList = [
  {
    id: 'HOME',
    path: '/',
    label: 'Home',
    icon: <AiFillHome />,
  },
  {
    id: 'TRENDING',
    path: '/trending',
    label: 'Trending',
    icon: <HiFire />,
  },
  {
    id: 'GAMING',
    path: '/gaming',
    label: 'Gaming',
    icon: <SiYoutubegaming />,
  },
  {
    id: 'SAVED',
    path: '/saved-videos',
    label: 'Saved Videos',
    icon: <MdPlaylistAdd />,
  },
]

import SidebarItem from '../SidebarItem'

import {
  Navbar,
  WebsiteLogo,
  NavIconsWrapper,
  ThemeToggleButton,
  ThemeToggleIcon,
  MenuButton,
  ProfileImg,
  MenuIcon,
  LogoutIconButton,
  LogoutIcon,
  LogoutTextButton,
  PopupContent,
  PopupText,
  PopupButtonsContainer,
  PopupButton,
  MobileMenuContainer,
  CloseButton,
  MobileMenuItems,
  MobileMenuItemWrapper,
} from './styledComponents'

const Header = (props) => {
  const { history } = props

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {(value) => {
        const { isLightTheme, toggleTheme } = value

        return (
          <Navbar isLightTheme={isLightTheme}>
            <Link to="/">
              <WebsiteLogo
                src={
                  isLightTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
              />
            </Link>

            <NavIconsWrapper>
              <ThemeToggleButton
                type="button"
                data-testid="theme"
                onClick={toggleTheme}
              >
                <ThemeToggleIcon isLightTheme={isLightTheme}>
                  {isLightTheme ? <FaMoon /> : <BsSun />}
                </ThemeToggleIcon>
              </ThemeToggleButton>

              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <Popup
                modal
                trigger={
                  <MenuButton type="button">
                    <MenuIcon isLightTheme={isLightTheme}>
                      <GiHamburgerMenu />
                    </MenuIcon>
                  </MenuButton>
                }
              >
                {(close) => (
                  <MobileMenuContainer isLightTheme={isLightTheme}>
                    <CloseButton
                      type="button"
                      onClick={close}
                      isLightTheme={isLightTheme}
                    >
                      ✕
                    </CloseButton>

                    <MobileMenuItems>
                      {sidebarItemsList.map((eachItem) => (
                        <MobileMenuItemWrapper
                          key={eachItem.id}
                          onClick={close}
                        >
                          <SidebarItem
                            linkDetails={eachItem}
                            isActive={
                              history.location.pathname === eachItem.path
                            }
                            isLightTheme={isLightTheme}
                          />
                        </MobileMenuItemWrapper>
                      ))}
                    </MobileMenuItems>
                  </MobileMenuContainer>
                )}
              </Popup>

              <div className="popup-container">
                <Popup
                  modal
                  trigger={
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <LogoutIconButton type="button">
                        <LogoutIcon isLightTheme={isLightTheme}>
                          <FiLogOut />
                        </LogoutIcon>
                      </LogoutIconButton>

                      <LogoutTextButton
                        type="button"
                        isLightTheme={isLightTheme}
                      >
                        Logout
                      </LogoutTextButton>
                    </div>
                  }
                >
                  {(close) => (
                    <PopupContent isLightTheme={isLightTheme}>
                      <PopupText isLightTheme={isLightTheme}>
                        Are you sure you want to logout?
                      </PopupText>

                      <PopupButtonsContainer>
                        <PopupButton
                          type="button"
                          isLightTheme={isLightTheme}
                          onClick={close}
                        >
                          Cancel
                        </PopupButton>

                        <PopupButton
                          type="button"
                          outline
                          isLightTheme={isLightTheme}
                          onClick={() => {
                            onClickLogout()
                            close()
                          }}
                        >
                          Confirm
                        </PopupButton>
                      </PopupButtonsContainer>
                    </PopupContent>
                  )}
                </Popup>
              </div>
            </NavIconsWrapper>
          </Navbar>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default withRouter(Header)
