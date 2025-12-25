import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 100%;
  height: 300px;
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
  padding: 0px 10px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #1e293b;
  margin: 0 0 4px 0;
`

export const MetaData = styled.p`
  font-size: 12px;
  color: #64748b;
  margin: 0;
`
