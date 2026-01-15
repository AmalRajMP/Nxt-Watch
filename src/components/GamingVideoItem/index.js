import {Link} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {GamingItem, Thumbnail, Title, Views} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isLightTheme} = value

        return (
          <GamingItem>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <Thumbnail src={thumbnailUrl} alt={title} />
              <Title isLightTheme={isLightTheme}>{title}</Title>
              <Views isLightTheme={isLightTheme}>
                {viewCount} Watching Worldwide
              </Views>
            </Link>
          </GamingItem>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default GamingVideoItem
