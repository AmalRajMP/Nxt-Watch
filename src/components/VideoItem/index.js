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
  const { videoDetails, horizontal = false } = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails
  console.log('horizontal prop =', horizontal)

  return (
    <Link to={`/videos/${id}`} style={{ textDecoration: 'none' }}>
      <VideoContainer horizontal={horizontal}>
        <Thumbnail
          src={thumbnailUrl}
          alt="video thumbnail"
          horizontal={horizontal}
        />

        <VideoDetails>
          <ChannelLogo
            src={channel.profileImageUrl}
            alt="channel logo"
            horizontal={horizontal}
          />

          <TextContainer>
            <Title horizontal={horizontal}>{title}</Title>
            <MetaData>
              <p className="channel">{channel.name}</p>
              <p className="channel">
                {viewCount} views • {publishedAt}
              </p>
            </MetaData>
          </TextContainer>
        </VideoDetails>
      </VideoContainer>
    </Link>
  )
}

export default VideoItem
