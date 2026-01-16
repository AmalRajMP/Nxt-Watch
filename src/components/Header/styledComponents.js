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
// Popup styling

export const PopupContent = styled.div`
  background-color: ${(props) => (props.isLightTheme ? '#ffffff' : '#212121')};
  border-radius: 12px;
  padding: 24px 32px;
  width: 90%;
  max-width: 380px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
`

export const PopupText = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 24px;
  color: ${(props) => (props.isLightTheme ? '#00306e' : '#ffffff')};
`

export const PopupButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`

export const PopupButton = styled.button`
  background-color: ${(props) => (props.outline ? '#3b82f6' : 'transparent')};

  color: ${(props) =>
    props.outline ? '#ffffff' : props.isLightTheme ? '#64748b' : '#cbd5e1'};

  border: 1px solid
    ${(props) =>
      props.outline ? '#3b82f6' : props.isLightTheme ? '#64748b' : '#cbd5e1'};

  padding: 6px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
`
// Mobile Menu Styling

export const MobileMenuContainer = styled.div`
  background-color: ${(props) => (props.isLightTheme ? '#ffffff' : '#181818')};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  padding: 24px;
  z-index: 9999; /* above navbar */
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 28px;
  color: ${(props) => (props.isLightTheme ? '#000000' : '#ffffff')};
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

export const MobileMenuItems = styled.ul`
  list-style-type: none;
  margin-top: 80px;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 26px;
`

export const MobileMenuItemWrapper = styled.li`
  list-style-type: none;
`
