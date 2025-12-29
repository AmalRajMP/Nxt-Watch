import { Component } from 'react'

import { AiFillHome } from 'react-icons/ai'
import { HiFire } from 'react-icons/hi'
import { SiYoutubegaming } from 'react-icons/si'
import { MdPlaylistAdd } from 'react-icons/md'

import SidebarItem from '../SidebarItem'

import { SidebarContainer, SidebarItemsList } from './styledComponents'

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

class Sidebar extends Component {
  state = {
    activeId: sidebarItemsList[0].id,
  }

  onClickSidebarLink = (id) => {
    this.setState({ activeId: id })
  }

  render() {
    const { activeId } = this.state
    return (
      <SidebarContainer>
        <SidebarItemsList>
          {sidebarItemsList.map((eachItem) => (
            <li key={eachItem.id}>
              <SidebarItem
                linkDetails={eachItem}
                isActive={activeId === eachItem.id}
                onClickSidebarLink={this.onClickSidebarLink}
              />
            </li>
          ))}
        </SidebarItemsList>
      </SidebarContainer>
    )
  }
}

export default Sidebar
