import React, { useState } from 'react'

import Container from '@material-ui/core/Container'

import AppBar from '../../components/appBar'
import Header from '../../components/header'

export default function Home() {
  const [search, setSearch] = useState('')

  return (
    <>
      <AppBar search={search} setSearch={setSearch} />
      <Container>
        <Header text={search} />
        <div>Conteudo</div>
      </Container>
    </>
  )
}
