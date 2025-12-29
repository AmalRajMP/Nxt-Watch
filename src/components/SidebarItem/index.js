import { SidebarLink, SidebarIcon, SidebarLabel } from './styledComponents'

const SidebarItem = (props) => {
  const { linkDetails, isActive, onClickSidebarLink } = props
  const { id, path, label, icon } = linkDetails

  return (
    <SidebarLink
      to={path}
      $active={isActive}
      onClick={() => onClickSidebarLink(id)}
    >
      <SidebarIcon $active={isActive}>{icon}</SidebarIcon>
      <SidebarLabel $active={isActive}>{label}</SidebarLabel>
    </SidebarLink>
  )
}

export default SidebarItem
