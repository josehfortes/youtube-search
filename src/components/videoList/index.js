import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import VideoCard from '../videoCard'

function VideoList({ list }) {
  return (
    <Grid container spacing={3}>
      {list.map(({ snippet, id }, key) => (
        <Item
          key={`item-video-list-${key}`}
          title={snippet.title}
          description={snippet.description}
          thumbnail={snippet.thumbnails.default.url}
          videoId={id.videoId}
        />
      ))}
    </Grid>
  )
}

const Item = ({ title, description, thumbnail, videoId }) => (
  <Grid item xs={12} md={3}>
    <VideoCard title={title} description={description} thumbnail={thumbnail} videoId={videoId} />
  </Grid>
)

Item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  videoId: PropTypes.string.isRequired
}

Item.defaultProps = {
  thumbnail: false
}

VideoList.propTypes = {
  list: PropTypes.array.isRequired
}

export default VideoList
