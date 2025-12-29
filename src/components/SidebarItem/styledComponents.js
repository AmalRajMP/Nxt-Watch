import styled from 'styled-components'
import { Link } from 'react-router-dom'

/* Whole clickable sidebar row */
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 12px 20px;
  text-decoration: none;

  background-color: ${(props) => (props.$active ? '#f1f5f9' : 'transparent')};
`

export const SidebarIcon = styled.div`
  font-size: 20px;

  color: ${(props) => (props.$active ? '#ff0000' : '#64748b')};
`

export const SidebarLabel = styled.p`
  margin: 0;

  font-size: 14px;
  font-weight: 500;

  color: ${(props) => (props.$active ? '#000000' : '#64748b')};
`
