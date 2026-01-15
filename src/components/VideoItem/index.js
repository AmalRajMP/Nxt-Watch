import { Link } from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

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

  return (
    <ThemeAndVideoContext.Consumer>
      {(value) => {
        const { isLightTheme } = value

        return (
          <Link to={`/videos/${id}`} style={{ textDecoration: 'none' }}>
            <VideoContainer horizontal={horizontal} isLightTheme={isLightTheme}>
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
                  <Title horizontal={horizontal} isLightTheme={isLightTheme}>
                    {title}
                  </Title>

                  <MetaData isLightTheme={isLightTheme}>
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
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoItem
