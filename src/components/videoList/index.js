import React from 'react'

import Grid from '@material-ui/core/Grid'

import VideoCard from '../videoCard'

function VideoList() {
  return (
    <Grid container spacing={3}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Grid>
  )
}

const Item = () => (
  <Grid item xs={12} md={3}>
    <VideoCard />
  </Grid>
)

export default VideoList
