import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import SearchInput from '../input/searchInput'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}))

export default function NavBar() {
  const classes = useStyles()
  /* [valor, função que altera o valor] = useState(valor default) */
  const [search, setSearch] = useState('')

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Youtube Search
          </Typography>
          <div>
            <SearchInput placeholder="Procure um vídeo" value={search} onChange={setSearch} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
