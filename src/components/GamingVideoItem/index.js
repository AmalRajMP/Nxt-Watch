import { Link } from 'react-router-dom'

import { GamingItem, Thumbnail, Title, Views } from './styledComponents'

const GamingVideoItem = (props) => {
  const { videoDetails } = props
  const { id, title, thumbnailUrl, viewCount } = videoDetails

  return (
    <GamingItem>
      <Link to={`/videos/${id}`} style={{ textDecoration: 'none' }}>
        <Thumbnail src={thumbnailUrl} alt={title} />
        <Title>{title}</Title>
        <Views>{viewCount} Watching Worldwide</Views>
      </Link>
    </GamingItem>
  )
}

export default GamingVideoItem
