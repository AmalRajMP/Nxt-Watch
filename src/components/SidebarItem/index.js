import {
  SidebarLink,
  SidebarIcon,
  SidebarLabel,
} from './styledComponents'

const SidebarItem = props => {
  const {linkDetails, isActive, isLightTheme} = props
  const {path, label, icon} = linkDetails

  return (
    <SidebarLink
      to={path}
      $active={isActive}
      isLightTheme={isLightTheme}
    >
      <SidebarIcon
        $active={isActive}
        isLightTheme={isLightTheme}
      >
        {icon}
      </SidebarIcon>
      <SidebarLabel
        $active={isActive}
        isLightTheme={isLightTheme}
      >
        {label}
      </SidebarLabel>
    </SidebarLink>
  )
}

export default SidebarItem
