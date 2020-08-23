import React from 'react'
import ReactDOM from 'react-dom'

import Home from './pages/home'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

import './index.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500]
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>,
  document.getElementById('root')
)
