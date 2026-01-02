import Header from '../Header'
import Sidebar from '../Sidebar'
import { SiYoutubegaming } from 'react-icons/si'

import {
  GamingPage,
  SidebarContainer,
  ContentContainer,
  GamingHeader,
  GamingIconWrapper,
  GamingTitle,
} from './styledComponents'

const Gaming = () => (
  <>
    <Header />
    <GamingPage>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <ContentContainer>
        <GamingHeader>
          <GamingIconWrapper>
            <SiYoutubegaming size={28} color="#ff0000" />
          </GamingIconWrapper>
          <GamingTitle>Gaming</GamingTitle>
        </GamingHeader>
      </ContentContainer>
    </GamingPage>
  </>
)

export default Gaming
