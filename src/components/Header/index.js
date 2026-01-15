import { Link, withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'

import { FaMoon } from 'react-icons/fa'
import { BsSun } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiLogOut } from 'react-icons/fi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

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

              <MenuButton>
                <MenuIcon isLightTheme={isLightTheme}>
                  <GiHamburgerMenu />
                </MenuIcon>
              </MenuButton>

              <LogoutIconButton type="button" onClick={onClickLogout}>
                <LogoutIcon isLightTheme={isLightTheme}>
                  <FiLogOut />
                </LogoutIcon>
              </LogoutIconButton>

              <LogoutTextButton
                type="button"
                isLightTheme={isLightTheme}
                onClick={onClickLogout}
              >
                Logout
              </LogoutTextButton>
            </NavIconsWrapper>
          </Navbar>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default withRouter(Header)
