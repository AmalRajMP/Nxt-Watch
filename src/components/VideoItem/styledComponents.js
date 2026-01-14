import styled from 'styled-components'

export const VideoContainer = styled.li`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column; /* default vertical */

  ${({ horizontal }) =>
    horizontal &&
    `
    @media screen and (min-width: 576px) {
      flex-direction: row;
      gap: 20px;
    }
  `}
`

export const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;

  ${({ horizontal }) =>
    horizontal &&
    `
    @media screen and (min-width: 576px) {
      width: 50%;
    }
  `}
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

  ${({ horizontal }) =>
    horizontal &&
    `
    @media screen and (min-width: 576px) {
      display: none;
    }
  `}
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`

export const Title = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #1e293b;
  margin: 0 0 4px 0;

  ${({ horizontal }) =>
    horizontal &&
    `
    @media screen and (min-width: 576px) {
      font-size: 20px;
    }
  `}
`

export const MetaData = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0;

  .channel::after {
    content: ' • ';
  }

  @media screen and (min-width: 576px) {
    .channel {
      display: block;
    }

    .channel::after {
      content: '';
    }
  }
`
