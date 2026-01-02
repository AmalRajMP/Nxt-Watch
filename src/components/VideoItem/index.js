import { Link } from 'react-router-dom'

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
  const { id, title, thumbnailUrl, channel, viewCount, publishedAt } =
    videoDetails

  return (
    <VideoContainer>
      <Link
        to={`/videos/${id}`}
        onClick={() => console.log('Video item clicked', id)}
        style={{ textDecoration: 'none' }}
      >
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
      </Link>
    </VideoContainer>
  )
}

export default VideoItem
