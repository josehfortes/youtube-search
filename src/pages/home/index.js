import React, { useState } from 'react'

import Container from '@material-ui/core/Container'

import AppBar from '../../components/appBar'
import Header from '../../components/header'
import VideoList from '../../components/videoList'

export default function Home() {
  const [search, setSearch] = useState('')
  console.log(process.env.YOUTUBE_API_URL)
  return (
    <>
      <AppBar setSearch={setSearch} />
      <Container>
        <Header text={search} />
        <VideoList />
      </Container>
    </>
  )
}
