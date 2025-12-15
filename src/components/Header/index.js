import { withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'

import { FaMoon } from 'react-icons/fa'
// import {BsSun} from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiLogOut } from 'react-icons/fi'

import {
  Navbar,
  WebsiteLogo,
  NavIconsWrapper,
  ThemeToggleButton,
  ThemeToggleIcon,
  MenuButton,
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
    <Navbar>
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="website-logo"
      />
      <NavIconsWrapper>
        <ThemeToggleButton type="button">
          <ThemeToggleIcon>
            <FaMoon />
          </ThemeToggleIcon>
        </ThemeToggleButton>
        <MenuButton>
          <MenuIcon>
            <GiHamburgerMenu />
          </MenuIcon>
        </MenuButton>
        <LogoutIconButton type="button" onClick={onClickLogout}>
          <LogoutIcon>
            <FiLogOut />
          </LogoutIcon>
        </LogoutIconButton>
        <LogoutTextButton type="button" onClick={onClickLogout}>
          Logout
        </LogoutTextButton>
      </NavIconsWrapper>
    </Navbar>
  )
}

export default withRouter(Header)
