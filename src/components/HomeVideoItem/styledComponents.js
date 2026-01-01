import styled from 'styled-components'

export const VideoItem = styled.li`
  width: 100%;
  list-style-type: none;
`

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
`

export const VideoDetails = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  flex-shrink: 0;

  @media screen and (max-width: 576px) {
    width: 32px;
    height: 32px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #1e293b;
  margin: 0 0 4px 0;

  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`

export const MetaData = styled.p`
  font-size: 12px;
  color: #64748b;
  margin: 0;

  @media screen and (max-width: 576px) {
    font-size: 11px;
  }
`
