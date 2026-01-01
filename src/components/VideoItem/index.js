import {
  VideoContainer,
  Thumbnail,
  VideoDetails,
  ChannelLogo,
  TextContainer,
  Title,
  MetaData,
} from './styledComponents'

const VideoItem = (props) => {
  const { videoDetails } = props
  const { title, thumbnailUrl, channel, viewCount, publishedAt } = videoDetails

  return (
    <VideoContainer>
      <Thumbnail src={thumbnailUrl} alt="video thumbnail" />

      <VideoDetails>
        <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />

        <TextContainer>
          <Title>{title}</Title>
          <MetaData>
            {channel.name} • {viewCount} views • {publishedAt}
          </MetaData>
        </TextContainer>
      </VideoDetails>
    </VideoContainer>
  )
}

export default VideoItem
