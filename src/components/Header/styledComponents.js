import styled from 'styled-components'

export const Navbar = styled.nav`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  background-color: ${(props) => (props.isLightTheme ? '#ffffff' : '#181818')};
  transition: background-color 0.3s ease;
`

export const WebsiteLogo = styled.img`
  height: 30px;
  width: 120px;
`

export const NavIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const ThemeToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`

export const ThemeToggleIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${(props) => (props.isLightTheme ? '#000000' : '#ffffff')};
`

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 22px;
  color: ${(props) => (props.isLightTheme ? '#000000' : '#ffffff')};
`

export const ProfileImg = styled.img`
  height: 22px;
  width: 22px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutIcon = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${(props) => (props.isLightTheme ? '#000000' : '#ffffff')};
`

export const LogoutTextButton = styled.button`
  display: none;
  background-color: transparent;
  border: 1px solid ${(props) => (props.isLightTheme ? '#3b82f6' : '#ffffff')};
  color: ${(props) => (props.isLightTheme ? '#3b82f6' : '#ffffff')};
  font-size: 14px;
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 6px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: block;
  }
`
