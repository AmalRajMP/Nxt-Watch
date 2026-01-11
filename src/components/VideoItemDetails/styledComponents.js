import styled from 'styled-components'

export const VideoDetailsPage = styled.div`
  display: flex;
  width: 100%;
  padding-top: 64px;
`

export const SidebarContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 240px;
    flex-shrink: 0;
  }
`

export const ContentContainer = styled.div`
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`

export const VideoPlayerContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background-color: black;
  z-index: 1;
`

export const VideoDetailsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 18px 14px;
`
export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #1e293b;

  line-height: 1.4;
`

/* Views + published date row */
export const VideoStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 13px;
  color: #64748b;
  margin-bottom: 15px;
`

/* Like / Dislike / Save buttons */
export const ActionButtons = styled.div`
  display: flex;
  gap: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 16px;
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: #475569;
  font-size: 14px;
  cursor: pointer;
`

/* Channel info section */
export const ChannelRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`

export const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 4px;
`

export const SubscribersText = styled.p`
  font-size: 12px;
  color: #64748b;
`

export const VideoDescription = styled.p`
  font-size: 13px;
  color: #475569;
  line-height: 1.6;
`
