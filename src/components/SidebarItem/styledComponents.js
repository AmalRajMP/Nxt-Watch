import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  text-decoration: none;

  background-color: ${(props) => {
    if (props.$active) {
      return props.isLightTheme ? '#f1f5f9' : '#313131'
    }
    return 'transparent'
  }};
`

export const SidebarIcon = styled.div`
  font-size: 20px;
  color: ${(props) => {
    if (props.$active) return '#ff0000'
    return props.isLightTheme ? '#64748b' : '#94a3b8'
  }};
`

export const SidebarLabel = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => {
    if (props.$active) {
      return props.isLightTheme ? '#000000' : '#ffffff'
    }
    return props.isLightTheme ? '#64748b' : '#94a3b8'
  }};
`
