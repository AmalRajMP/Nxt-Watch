import { GamingItem, Thumbnail, Title, Views } from './styledComponents'

const GamingVideoItem = (props) => {
  const { videoDetails } = props
  const { title, thumbnailUrl, viewCount } = videoDetails

  return (
    <GamingItem>
      <Thumbnail src={thumbnailUrl} alt={title} />
      <Title>{title}</Title>
      <Views>{viewCount} Watching Worldwide</Views>
    </GamingItem>
  )
}

export default GamingVideoItem
