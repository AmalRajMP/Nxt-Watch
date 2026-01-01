import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  width: 240px;
  height: calc(100vh - 64px);
  background-color: #ffffff;
  border-right: 1px solid #e2e8f0;

  position: fixed;
  top: 64px;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SidebarItemsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
`
export const ContactUsContainer = styled.div`
  padding: 16px;
`

export const ContactTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
`

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`

export const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`

export const ContactDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
`
