import {
  VideoItem,
  Thumbnail,
  VideoDetails,
  ChannelLogo,
  TextContainer,
  Title,
  MetaData,
} from './styledComponents'

const HomeVideoItem = (props) => {
  const { videoDetails } = props
  const { title, thumbnailUrl, channel, viewCount, publishedAt } = videoDetails

  return (
    <VideoItem>
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
    </VideoItem>
  )
}

export default HomeVideoItem
