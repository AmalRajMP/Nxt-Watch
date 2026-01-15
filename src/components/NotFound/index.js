import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NotFoundPage,
  SidebarContainer,
  ContentContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isLightTheme} = value

      const notFoundImg = isLightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundPage isLightTheme={isLightTheme}>
            <SidebarContainer>
              <Sidebar />
            </SidebarContainer>

            <ContentContainer>
              <NotFoundContainer>
                <NotFoundImage src={notFoundImg} alt="not found" />
                <NotFoundHeading isLightTheme={isLightTheme}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundText isLightTheme={isLightTheme}>
                  We are sorry, the page you requested could not be found.
                </NotFoundText>
              </NotFoundContainer>
            </ContentContainer>
          </NotFoundPage>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
