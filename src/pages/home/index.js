import React from 'react'

import Container from '@material-ui/core/Container'

import AppBar from '../../components/appBar'
import Header from '../../components/header'

export default function Home() {
  return (
    <>
      <AppBar />
      <Container>
        <Header text="Teste" />
        <div>Conteudo</div>
      </Container>
    </>
  )
}
