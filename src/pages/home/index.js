import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Container from '@material-ui/core/Container'
import LinearProgress from '@material-ui/core/LinearProgress'

import AppBar from '../../components/appBar'
import Header from '../../components/header'
import VideoList from '../../components/videoList'

const MAX_VIDEOS = 8

export default function Home() {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    if (search.length > 0) {
      getYoutubeData()
    }

    async function getYoutubeData() {
      setLoading(true)

      const { data, status } = await axios.get(
        `${process.env.YOUTUBE_API_URL}/search?key=${process.env.YOUTUBE_API_KEY}&part=snippet&q=${search}&type=video&maxResults=${MAX_VIDEOS}`
      )
      setVideos(data.items || [])
      setLoading(false)
    }
  }, [search])

  return (
    <>
      <AppBar setSearch={setSearch} />
      <Container>
        <Header text={search} />
        {loading && <LinearProgress />}
        {!loading && <VideoList list={videos} />}
      </Container>
    </>
  )
}
