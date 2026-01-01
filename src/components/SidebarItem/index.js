import { SidebarLink, SidebarIcon, SidebarLabel } from './styledComponents'

const SidebarItem = (props) => {
  const { linkDetails, isActive } = props
  const { path, label, icon } = linkDetails

  return (
    <SidebarLink to={path} $active={isActive}>
      <SidebarIcon $active={isActive}>{icon}</SidebarIcon>
      <SidebarLabel $active={isActive}>{label}</SidebarLabel>
    </SidebarLink>
  )
}

export default SidebarItem
